
// components/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log('Login attempt:', { username, password });
  };

  return (
    <div className="login-container fade-in">
      <h2 className="glitch" data-text="Login to CodeBuddy 🔓">Login to CodeBuddy 🔓</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username 👤</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password 🔑</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login 🚀</button>
      </form>
      <p className="register-link">
        New to CodeBuddy? <Link to="/register">Register here! 📝</Link>
      </p>
    </div>
  );
}

export default Login;
