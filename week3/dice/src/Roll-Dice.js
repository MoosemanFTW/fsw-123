import { useState } from "react";
function rollDice() {
  const [firstDieResult, setFirstDieResult] = useState(1);
  const [secondDieResult, setSecondDieResult] = useState(6);

  const firstDieImage = require(`./assets/${firstDieResult}.png`);
  const secondDieImage = require(`./assets/${secondDieResult}.png`);

  
    setFirstDieResult(Math.floor(Math.random() * 6) + 1);
    setSecondDieResult(Math.floor(Math.random() * 6) + 1);
  }

  export default rollDice
