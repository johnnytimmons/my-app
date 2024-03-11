import React, { useEffect, useState } from "react";

import generalRollDice from "../utils/generalRollDice";

const EnterModifier = ({ label, keyAbility, baseValue }) => {
  // Calculate the modifier directly when rendering
  const [modifier, setModifier] = useState(baseValue);
  const [result, setResult] = useState(null);
  const [d20Result, setD20Result] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  // Define a function to handle rolling the dice
  const handleRollDice = () => {
    // Update modifier state before rolling the dice
    setModifier(baseValue);
    const { rolls, totalResult } = generalRollDice(1, 20, baseValue); // Roll 1d20 with modifier
    setResult(totalResult); // Set totalResult state
    setD20Result(rolls[0]); // Set d20Result state
    setButtonClicked(true); // Set buttonClicked to true after clicking
  };

  return (
    <div>
      <label>
        {label} Check : {baseValue}
      </label>
      <p>Key Ability: {keyAbility}</p>
      {/* Conditionally render results after button is clicked */}
      {buttonClicked && (
        <p>
          {d20Result} + {baseValue} = {result}
        </p>
      )}
      <button onClick={handleRollDice}>Roll Dice</button>
    </div>
  );
};

export default EnterModifier;
