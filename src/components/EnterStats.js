import React, { useState } from "react";
import { calculateModifier } from "../utils/calculateModifier";
import generalRollDice from "../utils/generalRollDice";

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
    <div className="abilitiesDiv items-center w-32">
      <label className="text-1xl font-bold text-[#4e3629] w-auto">
        {label}:
        <input
          className="itemInput"
          type="number"
          value={value}
          onChange={handleChange}
          required
          min="0"
        />
      </label>
      <div className="abilitiesClass">
        <label className="labelDiv">
          <span>
            {label} check: {Math.floor((value - 10) / 2)}
          </span>
        </label>
        <div>
          <button onClick={handleRollDice}>Roll Dice</button>
          {/* Conditionally render rolls */}
          {buttonClicked && (
            <p>
              {rolls.join(", ")} + {modifier} =<span>{totalResult}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnterStats;
