import './Create_Drink_page.css';
import React, { useEffect, useState } from 'react';
import glassTypes from '../Data/glassTypes';

const CreateDrinkPage = ({navigateBack}) => {
  const [imageUrl, setImageUrl] = useState("");
  const [cocktailName, setCocktailName] = useState("");
  const [cocktailTag, setCocktailTag] = useState("");
  const [instruction, setInstruction] = useState("");
  const [ingredientsFields, setIngredientsFields] = useState([{ingredientId: 0, measurement: ""}]);
  const [ingredientsList, setIngredientsList] = useState([{}]);
  const [glassType, setGlassType] = useState(0);
  const [alcoholic, setAlcoholic] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const addFields = (event) => {
      let newField = {ingredientId: 0, measurement: ""};
      setIngredientsFields([...ingredientsFields, newField]);
      event.preventDefault();
  }

  const handleAlcoholicChange = () => {
    setAlcoholic(true);
  }

  const handleNonAlcoholicChange = () =>{
    setAlcoholic(false);
  }

  const handleFormIngredientIdChange = (event, index) => {
    const ingredientId  = event.target.value;
    let data = [...ingredientsFields];
    data[index].ingredientId = ingredientId
    setIngredientsFields(data);
  };

  const handleFormMeasurementChange = (event, index) => {
    const  measurement  = event.target.value;
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
    <div className='drink-page-content'>
      <form>
          <div className='image-container'>
            <div className="back-button-container">
              <span className="material-icons back-button" onClick={() => navigateBack()}>arrow_back</span>
            </div>
            <img className='drink-page-image' src={imageUrl} alt={""} />
            <input type="text" value={imageUrl} 
                    placeholder="Enter Image Url"
                    onChange={(e) => setImageUrl(e.target.value)}/> 
          </div> 

          <div className='drink-page-text'>
            <div className='drink-page-header'>
              <div className='drink-page-title'>
                    <input type="text" value={cocktailName} 
                            placeholder ="Drink name..." 
                            onChange={(e) => setCocktailName(e.target.value)}
                            maxLength={50}
                            required></input>
                <div className='drink-page-tags'>
                    <input type="text" value={cocktailTag} 
                            placeholder="Describe your cocktail..." 
                            onChange={(e) => setCocktailTag(e.target.value)}
                            maxLength={100} required></input>
                </div>
              </div>
            </div>

            <div className='dark-gray-box'>
              <h2>Ingredient</h2>
              <div className='drink-page-ingredients'>
                <div className='drink-page-ingredient'>
                  <select className='drink-measurement' defaultValue="default" 
                          onChange={(event) => handleFormGlassChange(event)} required>
                    <option value="default" disabled>Pick the glasstype</option>
                        {glassTypes.map((glass)=>{
                          return(
                            <option key={glass.Value} value={glass.Value}>
                              {glass.Name}
                            </option>
                          )
                        })}
                  </select>
                </div>
                <div className='drink-page-ingredient'> 
                  {ingredientsFields.map((ingredientField, index) => {
                    return(
                      <div key={index}>
                        <select name={ingredientField} className='drink-ingredient' defaultValue="default" 
                          onChange={(event) =>handleFormIngredientIdChange(event, index)} required>
                          <option value="default" disabled>Pick your ingredient</option>
                            {ingredientsList ? ingredientsList.map((ingredient)=>{
                              return(
                                <option key={ingredient.ingredientId + ingredient.name} value={ingredient.ingredientId} >
                                  {ingredient.name}
                                </option>
                              )
                            }) : null}
                        </select>
                        <input type="text"
                            placeholder ="Measure of ingredient..." 
                            onChange={(event) =>handleFormMeasurementChange(event, index)}
                            maxLength={50}
                            className='drink-measurement'
                            name={ingredientField} required></input>
                      </div>
                    )
                  })}
                  <button onClick={(event) => addFields(event)}>Add more ingredients</button>
                </div>
                <div>
                  <label>Contains alcohol?
                    <label> Yes
                      <input type='radio' name='alcohol' value='yes' onChange={handleAlcoholicChange}></input>
                    </label>
                    <label>No
                      <input type='radio' name='alcohol' value='No' onChange={handleNonAlcoholicChange}></input>
                    </label>
                  </label>
                </div>
                <div>
                <input type="text" value={videoUrl} 
                    placeholder="Enter Video Url"
                    onChange={(e) => setVideoUrl(e.target.value)} />
                </div>
              </div>
            </div>
            <div className='dark-gray-box drink-page-instructions'>
                  <input type="text" value={instruction} 
                        onChange={(e) => setInstruction(e.target.value)}
                        maxLength={1500} 
                        placeholder="Enter your description of how to make your cocktail..." required/>
            </div>
          </div>
        <button onClick={(event) => handleSubmit(event)}>Add cocktail</button>
      </form>
    </div>
  );
};

export default CreateDrinkPage;

 