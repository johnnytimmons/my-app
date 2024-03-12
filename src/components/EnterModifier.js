import React, { useState } from "react";

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
    <div className="skillsDiv flex flex-col w-full items-center gap-1">
      <label className="text-1xl font-bold text-[#4e3629] w-auto">
        {label}
      </label>
      <div className="flex flex-row w-full ml-4">
        <button
          className="text-3xl w-1/2 border-2 border-lime-800 text-white text-center font-bold py-1 bg-lime-700 mr-2"
          onClick={handleRollDice}
        >
          {baseValue}
        </button>
        <span className="itemInput w-1/3 text-lg text-center bg-white rounded border border-gray-300 focus:border-lime-800 focus:ring-2 focus:ring-lime-300 outline-none text-gray-700 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out font-bold">
          {result}
        </span>
      </div>
      <p className="text-gray-600 text-xs font-bold uppercase">
        Mod: {keyAbility}
      </p>
      {/* Conditionally render results after button is clicked */}
      {buttonClicked && (
        <p>
          {d20Result} + {baseValue} = {result}
        </p>
      )}
    </div>
  );
};

export default EnterModifier;
