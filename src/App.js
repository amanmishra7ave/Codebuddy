import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Challenge from './components/Challenge';
import './App.css'
import UserGraph from './components/UserGraph';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/user-info" element={<UserGraph/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
