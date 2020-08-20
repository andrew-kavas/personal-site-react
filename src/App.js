import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Andrew Kavas
        </p>
        <a
          className="App-link"
          href="https://personal-site-heroku.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Personal site
        </a>
      </header>
    </div>
  );
}

export default App;
