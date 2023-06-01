import React, { useContext, useState } from 'react';
import {redirect} from 'react-router-dom';
import LoginLogo from './Login_logo';
import './Login_page.css';
import { AuthContext } from '../Context/AuthContext';

const Login_page = ({
  navigateBackToMain,
}) => {
  const {isAuthenticated, login} = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Logging in ${selectedUser} with password ${password}`);
    login(selectedUser, password);
    // Perform your login logic here
  };

  if(isAuthenticated){
    return <redirect to="/main"/>;
  }
  
  return (
    <div className="login-page">
      <div className='login-page-header'>
        <LoginLogo />
        <h1 className="title">sipster</h1>
      </div>
      <div className='login-page-input'>
        <form className='login-page-form' onSubmit={handleSubmit}>
          <input
            className='select-user'
            type="text"
            value={username}
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* <label htmlFor="password">Password:</label> */}
          <input
            className='password-input'
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Password"
          />
          <button className='login-button' type="submit" onClick={navigateBackToMain}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login_page;
