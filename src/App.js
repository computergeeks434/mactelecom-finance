import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mactelecom Networks</h1>
        <h2>Financial Flow System</h2>
        <p>Live dashboard for tracking income, expenses, and net profit.</p>
      </header>
      <Analytics />
    </div>
  );
}

export default App;
