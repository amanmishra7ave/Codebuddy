import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">CodeBuddy 🚀</Link>
        <ul className="navbar-menu">
          <li><Link to="/">Home 🏠</Link></li>
          <li><Link to="/dashboard">Dashboard 📊</Link></li>
          <li><Link to="/challenge">Challenge 🥊</Link></li>
          <li><Link to="/register">Register 📝</Link></li>
          <li><Link to="/login">Login 🔑</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;