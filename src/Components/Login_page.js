import React, { useState } from 'react';

import './Login_page.css';

const Login_page = () => {
  const [selectedUser, setSelectedUser] = useState('');
  const [password, setPassword] = useState('');

  const users = [
    { username: 'Novice', password: '1234' },
    // Add more users here
  ];

  const handleUserChange = (e) => {
    const selected = e.target.value;
    setSelectedUser(selected);
    const user = users.find((user) => user.username === selected);
    setPassword(user ? user.password : '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Logging in ${selectedUser} with password ${password}`);
    // Perform your login logic here
  };

  return (
    <div className="login-page">
      <div className='login-page-header'>
        
        <h1 className="title">sipster</h1>
      </div>
      <div className='login-page-input'>
        <form className='login-page-form' onSubmit={handleSubmit}>
          {/* <label htmlFor="user">User:</label> */}
          <select
            className='select-user'
            name="user"
            id="user"
            value={selectedUser}
            onChange={handleUserChange}
          >
            <option value="">Select a user</option>
            {users.map((user, index) => (
              <option key={index} value={user.username}>
                {user.username}
              </option>
            ))}
          </select>
          {/* <label htmlFor="password">Password:</label> */}
          <input
            className='password-input'
            type="password"
            id="password"
            name="password"
            value={password}
            readOnly
            placeholder="Password"
          />
          <button className='login-button' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login_page;
