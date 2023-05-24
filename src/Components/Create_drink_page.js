import './Create_Drink_page.css';
import React, { useEffect, useState } from 'react';
import glassTypes from '../Data/glassTypes';

const CreateDrinkPage = ({ navigateBackToMain }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [cocktailName, setCocktailName] = useState("");
  const [cocktailTag, setCocktailTag] = useState("");
  const [instruction, setInstruction] = useState("");
  const [ingredientsFields, setIngredientsFields] = useState([{ ingredientId: 0, measurement: "" }]);
  const [ingredientsList, setIngredientsList] = useState([{}]);
  const [glassType, setGlassType] = useState(0);
  const [alcoholic, setAlcoholic] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const addFields = (event) => {
    let newField = { ingredientId: 0, measurement: "" };
    setIngredientsFields([...ingredientsFields, newField]);
    event.preventDefault();
  }

  const handleAlcoholicChange = () => {
    setAlcoholic(true);
  }

  const handleNonAlcoholicChange = () => {
    setAlcoholic(false);
  }

  const handleFormIngredientIdChange = (event, index) => {
    const ingredientId = event.target.value;
    let data = [...ingredientsFields];
    data[index].ingredientId = ingredientId
    setIngredientsFields(data);
  };

  const handleFormMeasurementChange = (event, index) => {
    const measurement = event.target.value;
    let data = [...ingredientsFields];
    data[index].measurement = measurement
    setIngredientsFields(data);
  };

  const handleFormGlassChange = (event) => {
    setGlassType(parseInt(event.target.value))
  }

  const mapIngredients = () => {
    const filteredIngredients = ingredientsList.filter((ingredient) => {
      return ingredientsFields.some((field) => field.ingredientId === ingredient.ingredientId);
    });

    const mappedIngredients = filteredIngredients.map((ingredientsFields) => {
      const ingredientdata = ingredientsList.find(
        (ingredient) => ingredient.ingredientId === (ingredientsFields.ingredientId)
      );

      return {
        "beverageIngredientId": 0,
        "beverageId": 0,
        "ingredientId": ingredientsFields.ingredientId,
        "measurement": ingredientsFields.measurement,
        "name": ingredientdata.name,
        "description": ingredientdata.description,
        "image": ingredientdata.image,
        "ingredient": {
          "ingredientId": ingredientsFields.ingredientId,
          "name": ingredientdata.name,
          "description": ingredientdata.description,
          "image": ingredientdata.image
        }
      };
    });

    return mappedIngredients;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const mappedIngredients = mapIngredients();
    let response;
    try {
      response = await fetch("https://localhost:7195/api/beverage", {
        method: "POST",
        body: JSON.stringify({
          "beverageId": 0,
          "name": cocktailName,
          "tag": cocktailTag,
          "alcohol": alcoholic,
          "glass": glassType,
          "instruction": instruction,
          "image": imageUrl,
          "video": videoUrl,
          "imageAttribution": "string",
          "creativeCommonsConfirmed": false,
          "beverageIngredients": mappedIngredients
        }),
        headers: { "Content-Type": "application/json" }
      });
      console.log("Response status:", response.status);
      const responseData = await response.json();
      console.log("Response headers:", response.headers);
      console.log("Response data:", responseData);
    } catch (error) {
      console.error("Error:", error);
    }
    console.log("Function execution finished.");

    // Log the raw response body as text
    if (response) {
      const rawResponse = await response.text();
      console.log("Raw response:", rawResponse);
    }
  };


  // const validateUrl = (url, setStateFunc) => {
  //   setStateFunc(url.replace(/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w.-]*)*\/?$/, ''));
  // }

  useEffect(() => {
    async function fetchIngredients() {
      await fetch("https://localhost:7195/api/ingredient/local/all")
        .then((response) => response.json())
        .then((result) => setIngredientsList(result.$values))
    }
    fetchIngredients();
  }, []);

  return (
    <div className='create-drink-page-content'>
      <h1 className='create-drink-h1'>create cocktail</h1>

      <form>
        <div className='create-drink-page-text'>
          <div className='create-drink-page-header'>

            <div className='create-drink-page-ingredients'>
              <h2 className='create-drink-h2'>Info</h2>
              <input type="text" value={cocktailName}
                placeholder="Cocktail name..."
                onChange={(e) => setCocktailName(e.target.value)}
                maxLength={50}
                required></input>
              <div className='create-drink-page-tags'>
                <input type="text" value={cocktailTag}
                  placeholder="Describe your cocktail..."
                  onChange={(e) => setCocktailTag(e.target.value)}
                  maxLength={100} required></input>
              </div>
              <div className='create-image-container'>
                <input type="text" value={imageUrl}
                  placeholder="Enter Image Url"
                  onChange={(e) => setImageUrl(e.target.value)} />
              </div>
            </div>

          </div>

          <div className='create-dark-gray-box'>
            <div className='create-drink-page-ingredients'>
              <h2 className='create-drink-h2'>Ingredient</h2>
              <div className='create-drink-page-ingredient'>
                <select className='create-drink-measurement' defaultValue="default"
                  onChange={(event) => handleFormGlassChange(event)} required>
                  <option value="default" disabled>Pick the glasstype</option>
                  {glassTypes.map((glass) => {
                    return (
                      <option key={glass.Value} value={glass.Value}>
                        {glass.Name}
                      </option>
                    )
                  })}
                </select>
              </div>
              <div className='create-drink-page-ingredient'>
                {ingredientsFields.map((ingredientField, index) => {
                  return (
                    <div key={index}>
                      <select name={ingredientField} className='create-drink-ingredient' defaultValue="default"
                        onChange={(event) => handleFormIngredientIdChange(event, index)} required>
                        <option value="default" disabled>Pick your ingredient</option>
                        {ingredientsList ? ingredientsList.map((ingredient) => {
                          return (
                            <option key={ingredient.ingredientId + ingredient.name} value={ingredient.ingredientId} >
                              {ingredient.name}
                            </option>
                          )
                        }) : null}
                      </select>
                      <input type="text"
                        placeholder="Amount..."
                        onChange={(event) => handleFormMeasurementChange(event, index)}
                        maxLength={50}
                        className='create-drink-measurement'
                        name={ingredientField} required></input>
                    </div>
                  )
                })}
                <button className='create-drink-add-more-ingredients create-drink-button' onClick={(event) => addFields(event)}>
                  <span className='create-drink-button-text'>
                    Add more ingredients
                  </span>
                </button>
              </div>
              <div className='create-drink-contains-alcohol'>
                <label>Contains alcohol?
                  <label> Yes
                    <input type='radio' name='alcohol' value='yes' onChange={handleAlcoholicChange}></input>
                  </label>
                  <label>No
                    <input type='radio' name='alcohol' value='No' onChange={handleNonAlcoholicChange}></input>
                  </label>
                </label>
              </div>

            </div>
          </div>
          <div className='create-dark-gray-box create-drink-page-instructions'>
            <h2 className='create-drink-h2'>Instructions</h2>
            <input type="text" value={instruction}
              onChange={(e) => setInstruction(e.target.value)}
              maxLength={1500}
              placeholder="How to make your cocktail?" required />
            <div>
              <br /><p>Video, optional</p>
              <input type="text" value={videoUrl}
                placeholder="Do you have a video URL?"
                onChange={(e) => setVideoUrl(e.target.value)} />
            </div>
          </div>
        </div>
        <button className='create-drink-button' onClick={(event) => handleSubmit(event)}>
          <span className='create-drink-button-text'>
            Add cocktail
          </span>
        </button>
      </form>
    </div>
  );
};

export default CreateDrinkPage;