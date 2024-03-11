import React, { useState } from "react";
import { calculateModifier } from "../utils/calculateModifier";
import generalRollDice from "../utils/generalRollDice";
import classOptions from "../utils/classOptions";

const EnterStats = ({ label, keyAbility, onChange }) => {
  const [value, setValue] = useState(10);
  const [rolls, setRolls] = useState([]);
  const [modifier, setModifier] = useState(null);
  const [totalResult, setTotalResult] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false); // Track button click

  const handleChange = (event) => {
    // Parsing input value and updating state
    const newValue = parseInt(event.target.value, 10);
    setValue(newValue);

    // Calculating modifier based on the current value
    const newModifier = calculateModifier(newValue);

    // Calling the onChange function with the updated value
    onChange(newModifier);
  };

  // Define a function to handle rolling the dice
  const handleRollDice = () => {
    const currentModifier = calculateModifier(value);
    // Call generalRollDice with appropriate arguments
    const { rolls, modifier, totalResult } = generalRollDice(
      1,
      20,
      currentModifier
    );
    setRolls(rolls);
    setModifier(modifier);
    setTotalResult(totalResult);
    setButtonClicked(true); // Set buttonClicked to true after clicking
  };

  return (
    <div className="abilitiesDiv items-center w-24 flex flex-col">
      <label className="text-1xl font-bold text-[#4e3629] w-auto">
        {label}
      </label>
      <div className="flex flex-col w-full items-center gap-1">
        <button
          className="text-3xl w-2/3 border-2 text-white text-center font-bold py-1 outline rounded-sm bg-lime-700"
          onClick={handleRollDice}
        >
          +{Math.floor((value - 10) / 2)}
        </button>
        {buttonClicked && (
          <p>
            {rolls.join(", ")} + {modifier} =<span>{totalResult}</span>
          </p>
        )}
        <div className="w-2/3">
          <input
            className="itemInput w-full text-lg text-center bg-white rounded border border-gray-300 focus:border-lime-800 focus:ring-2 focus:ring-lime-300 outline-none text-gray-700 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out font-bold"
            type="number"
            value={value}
            onChange={handleChange}
            required
            min="0"
          />
          {/* Conditionally render rolls */}
        </div>
      </div>
    </div>
  );
};

export default EnterStats;
