
import React, { useState, useEffect } from 'react';
import './Challenge.css';

// Dummy data for challenges; replace with API call in a real app
const dummyChallenges = [
  { id: 1, type: 'individual', challenger: 'user1', challenged: 'user2', problemCount: 5 },
  { id: 2, type: 'group', challenger: 'user3', challenged: 'group1', problemCount: 10 },
  { id: 3, type: 'individual', challenger: 'user4', challenged: 'user5', problemCount: 3 },
  // Add more dummy data as needed
];

function Challenge() {
  const [challenger, setChallenger] = useState('');
  const [challenged, setChallenged] = useState('');
  const [problemCount, setProblemCount] = useState('');
  const [challenges, setChallenges] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Replace with API call in a real app
    setChallenges(dummyChallenges);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement challenge logic
    console.log('Challenge created:', { challenger, challenged, problemCount });
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredChallenges = challenges.filter(challenge => filter === 'all' || challenge.type === filter);

  return (
    <div className="challenge">
      <h2>Create a Coding Challenge</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="challenger">Your Username</label>
          <input
            id="challenger"
            type="text"
            value={challenger}
            onChange={(e) => setChallenger(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="challenged">Opponent's Username</label>
          <input
            id="challenged"
            type="text"
            value={challenged}
            onChange={(e) => setChallenged(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="problemCount">Number of Problems</label>
          <input
            id="problemCount"
            type="number"
            value={problemCount}
            onChange={(e) => setProblemCount(e.target.value)}
            min="1"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Start Challenge</button>
      </form>

      <h3>Available Challenges</h3>
      <div className="filter">
        <label>Filter by Type:</label>
        <select onChange={handleFilterChange} value={filter}>
          <option value="all">All</option>
          <option value="individual">Individual</option>
          <option value="group">Group</option>
        </select>
      </div>
      <ul className="challenge-list">
        {filteredChallenges.map(challenge => (
          <li key={challenge.id}>
            <p><strong>Type:</strong> {challenge.type}</p>
            <p><strong>Challenger:</strong> {challenge.challenger}</p>
            <p><strong>Challenged:</strong> {challenge.challenged}</p>
            <p><strong>Problems:</strong> {challenge.problemCount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Challenge;

