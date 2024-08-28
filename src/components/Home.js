// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1 className="glitch" data-text="Welcome to CodeBuddy">Welcome to CodeBuddy</h1>
      <p className="subtitle">Level up your coding game! 🎮</p>
      <div className="feature-grid">
        <Link to="/user-info" className="feature-item fade-in">
          <h3>Daily Tracking 📈</h3>
          <p>Log your coding conquests and watch your skills skyrocket!</p>
        </Link>
        <div className="feature-item fade-in" style={{ animationDelay: '0.2s' }}>
          <h3>Epic Challenges 🏆</h3>
          <p>Battle your friends in code duels and claim coding glory!</p>
        </div>
        <div className="feature-item fade-in" style={{ animationDelay: '0.4s' }}>
          <h3>Leaderboards 🏅</h3>
          <p>Climb the ranks and become a coding legend!</p>
        </div>
      </div>
      <div className="cta-buttons">
        <Link to="/register" className="btn btn-primary">Join the Code Army 💪</Link>
        <Link to="/login" className="btn btn-secondary">Return to Battle 🛡️</Link>
      </div>
    </div>
  );
}

export default Home;
