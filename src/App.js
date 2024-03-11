import React, { useState, useEffect } from "react";
import EnterStats from "./components/EnterStats";
import SkillsList from "./components/SkillsList";
import AddCharacterContainer from "./components/AddCharacter";
import Navbar from "./components/Navbar";

//auth0 and firebase for backend

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
    <div className="wholePage">
      <Navbar />
      <AddCharacterContainer baseValues={baseValues} />{" "}
      {/* Use AddCharacterContainer instead of AddCharacter */}
      <div className="m-4 mb-4 text-center flex flex-col justify-center items-center">
        <h2 className="w-full text-2xl font-bold text-[#4e3629] mb-4">
          Abilities
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
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
    </div>
  );
};

export default App;
