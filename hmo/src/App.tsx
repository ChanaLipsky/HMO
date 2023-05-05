import React from 'react';
import bear from 'Bear.jpg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import hompage from './app/Homepage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bear} className="App-logo" alt="logo" />
        <Homepage/>
        <Routes>
            <Route path="homepage" element={}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
