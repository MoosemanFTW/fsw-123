import React from 'react';
import './App.css';
import rollDice from './Roll-Dice';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex', margin: 20 }}>
          <img src={firstDieImage} className="die" alt="Die one" />
          <img src={secondDieImage} className="die" alt="Die two" />
        </div>
        <span>{firstDieResult + secondDieResult}</span>
        <button className="button" onClick={rollDice}>Roll</button>
      </header>
    </div>
  );
}

export default App;