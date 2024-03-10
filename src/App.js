import React, { useState, useEffect } from "react";
import EnterStats from "./components/EnterStats";
import SkillsList from "./components/SkillsList";
import AddCharacter from "./components/AddCharacter";
import Navbar from "./components/Navbar";

const App = () => {
  const [baseValues, setBaseValues] = useState({
    Str: 0,
    Dex: 0,
    Cha: 0,
    Con: 0,
    Wis: 0,
    Int: 0,
  });

  // Define handleStatChange function
  const handleStatChange = (keyAbility, newModifier) => {
    // Update baseValues with the new modifier
    console.log(`Updating ${keyAbility} with modifier ${newModifier}`);
    setBaseValues((prevValues) => ({
      ...prevValues,
      [keyAbility]: newModifier,
    }));
  };
  useEffect(() => {}, [baseValues]);

  return (
    <div className="container">
      <Navbar />
      <AddCharacter />
      <div className="container">
        <h2 className="w-full text-2xl font-bold text-[#4e3629] ">Abilities</h2>
        <EnterStats
          label="Strength"
          keyAbility={"Str"}
          onChange={(newModifier) => handleStatChange("Str", newModifier)}
        />
        <EnterStats
          label="Dexterity"
          keyAbility={"Dex"}
          onChange={(newModifier) => handleStatChange("Dex", newModifier)}
        />
        <EnterStats
          label="Charisma"
          keyAbility={"Cha"}
          onChange={(newModifier) => handleStatChange("Cha", newModifier)}
        />
        <EnterStats
          label="Constitution"
          keyAbility={"Con"}
          onChange={(newModifier) => handleStatChange("Con", newModifier)}
        />
        <EnterStats
          label="Wisdom"
          keyAbility={"Wis"}
          onChange={(newModifier) => handleStatChange("Wis", newModifier)}
        />
        <EnterStats
          label="Intelligence"
          keyAbility={"Int"}
          onChange={(newModifier) => handleStatChange("Int", newModifier)}
        />
      </div>
    </div>
  );
};

export default App;
