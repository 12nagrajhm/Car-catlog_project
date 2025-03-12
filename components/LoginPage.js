// src/components/LoginPage.js
import React, { useState } from 'react';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsers = localStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];
    if (users.length > 0) {
      const user = users.find((u) => u.username === username && u.password === password);
      if (user) {
        onLogin(username);
      } else {
        setError('Invalid username or password');
      }
    } else {
      setError('No users registered. Please register.');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const storedUsers = localStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];
    const existingUser = users.find((u) => u.username === username);
    if (existingUser) {
      setError('Username already exists.');
      return;
    }
    const newUser = { username, password };
    localStorage.setItem('users', JSON.stringify([...users, newUser]));
    alert('User registered. Please log in.');
    setUsername('');
    setPassword('');
    setIsRegistering(false);
  };

  const toggleRegister = () => {
    setIsRegistering(!isRegistering);
    setError("");
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>{isRegistering ? 'Register' : 'Login'}</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={isRegistering ? handleRegister : handleLogin}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
        </form>
        <button onClick={toggleRegister}>
          {isRegistering ? 'Back to Login' : 'Register'}
        </button>
      </div>
    </div>
  );
}

export default LoginPage;