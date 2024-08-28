import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

function Dashboard() {
  const [problemData, setProblemData] = useState([
    {
      user: 'User1',
      data: [
        { date: '2023-05-01', count: 5 },
        { date: '2023-05-02', count: 7 },
        { date: '2023-05-03', count: 3 },
        { date: '2023-05-04', count: 8 },
        { date: '2023-05-05', count: 6 },
      ],
    },
    {
      user: 'User2',
      data: [
        { date: '2023-05-01', count: 2 },
        { date: '2023-05-02', count: 4 },
        { date: '2023-05-03', count: 6 },
        { date: '2023-05-04', count: 5 },
        { date: '2023-05-05', count: 3 },
      ],
    },
    {
      user: 'User3',
      data: [
        { date: '2023-05-01', count: 8 },
        { date: '2023-05-02', count: 9 },
        { date: '2023-05-03', count: 5 },
        { date: '2023-05-04', count: 7 },
        { date: '2023-05-05', count: 6 },
      ],
    },
    {
      user: 'User4',
      data: [
        { date: '2023-05-01', count: 4 },
        { date: '2023-05-02', count: 5 },
        { date: '2023-05-03', count: 3 },
        { date: '2023-05-04', count: 6 },
        { date: '2023-05-05', count: 8 },
      ],
    },
  ]);

  const [newCount, setNewCount] = useState('');
  const [selectedUser, setSelectedUser] = useState('User1');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the selected user's data with new count
    const today = new Date().toISOString().split('T')[0];
    setProblemData(prevData =>
      prevData.map(userData => 
        userData.user === selectedUser
          ? { ...userData, data: [...userData.data, { date: today, count: parseInt(newCount, 10) }] }
          : userData
      )
    );
    setNewCount('');
  };

  return (
    <div className="dashboard">
      <h2>Users' Coding Progress</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={problemData[2].data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            {problemData.map(userData => (
              <Line
                key={userData.user}
                type="monotone"
                dataKey="count"
                data={userData.data}
                stroke={`#${Math.floor(Math.random()*16777215).toString(16)}`}
                name={userData.user}
                dot={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
      <form onSubmit={handleSubmit} className="problem-form">
        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          className="user-select"
        >
          {problemData.map(userData => (
            <option key={userData.user} value={userData.user}>
              {userData.user}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Number of problems solved today"
          value={newCount}
          onChange={(e) => setNewCount(e.target.value)}
          min="0"
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Dashboard;
