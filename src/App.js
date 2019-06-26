import React from 'react';
import LegalSignOffForm from './LegalSignOffForm'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h3>
          OWL
      </h3>
      <img src={logo} className="App-logo" alt="logo" />
      <LegalSignOffForm />
      </header>
    </div>
  );
}



export default App;
