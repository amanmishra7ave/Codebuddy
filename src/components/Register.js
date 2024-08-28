
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration attempt:', { username, email, password });
  };

  return (
    <div className="register-container fade-in">
      <h2 className="glitch" data-text="Join CodeBuddy 🚀">Join CodeBuddy 🚀</h2>
      <form onSubmit={handleSubmit} className="register-form">
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
          <label htmlFor="email">Email 📧</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit" className="btn btn-primary">Register 🎉</button>
      </form>
      <p className="login-link">
        Already a member? <Link to="/login">Login here! 🔓</Link>
      </p>
    </div>
  );
}

export default Register;