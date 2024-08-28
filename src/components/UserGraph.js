import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './UserGraph.css';

function UserGraph() {
  // Static data for the graph
  const data = [
    { date: '2024-08-01', solves: 5 },
    { date: '2024-08-02', solves: 3 },
    { date: '2024-08-03', solves: 7 },
    { date: '2024-08-03', solves: 2 },
    { date: '2024-08-03', solves: 1 },
    { date: '2024-08-03', solves: 1 },

    { date: '2024-08-03', solves: 1 },
    { date: '2024-08-03', solves: 3 },
    { date: '2024-08-03', solves: 4 },
    { date: '2024-08-03', solves: 7 },
    { date: '2024-08-03', solves: 1 },
  ];

  return (
    <div className="user-graph-container fade-in">
      <h2 className="glitch" data-text="Your Problem Solving Graph 📈">Your Problem Solving Graph 📈</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="solves" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserGraph;

