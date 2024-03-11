import React, { useState, useEffect } from "react";
import classOptions from "../utils/classOptions";

const calculateStartingHP = (selectedClass, constitutionModifier) => {
  const selectedClassOption = classOptions
    .flatMap((group) => group.options)
    .find((classOption) => classOption.value === selectedClass);

  const baseHP = selectedClassOption ? selectedClassOption.hpModifier : 0;
  const adjustedHP = baseHP + constitutionModifier;
  console.log("Starting HP =", adjustedHP);
  return adjustedHP;
};
const calculateInitiative = (selectedClass, dexterityModifier) => {
  const selectedClassOption = classOptions
    .flatMap((group) => group.options)
    .find((classOption) => classOption.value === selectedClass);

  const baseInit = selectedClassOption ? selectedClassOption.initModifier : 0;
  const adjustedInit = baseInit + dexterityModifier;
  console.log("Init Modifier =", adjustedInit);
  return adjustedInit;
};
const AddCharacterContainer = ({ baseValues }) => {
  const [selectedClass, setSelectedClass] = useState("none");
  const [startingHP, setStartingHP] = useState(0);
  const [currentHP, setCurrentHP] = useState(0);
  const [startingInit, setStartingInit] = useState(0);
  useEffect(() => {
    setStartingHP(calculateStartingHP(selectedClass, baseValues.Con));
  }, [selectedClass, baseValues.Con]);

  useEffect(() => {
    setCurrentHP(startingHP);
  }, [startingHP]);

  useEffect(() => {
    const calculatedInitiative = calculateInitiative(
      selectedClass,
      baseValues.Dex
    );
    setStartingInit(calculatedInitiative);
  }, [selectedClass, baseValues.Dex]);

  const handleClassChange = (event) => {
    const selectedClass = event.target.value;
    setSelectedClass(selectedClass);
  };

  const handleHeal = () => {
    setCurrentHP((prevHP) => prevHP + 1);
  };

  const handleDamage = () => {
    setCurrentHP((prevHP) => prevHP - 1);
  };

  return (
    <div>
      <AddCharacter
        selectedClass={selectedClass}
        startingHP={startingHP}
        currentHP={currentHP}
        startingInit={startingInit}
        setStartingInit={setStartingInit}
        setStartingHP={setStartingHP}
        onClassChange={handleClassChange}
        onHeal={handleHeal}
        onDamage={handleDamage}
      />
    </div>
  );
};

const AddCharacter = ({
  selectedClass,
  startingHP,
  currentHP,
  startingInit,
  setStartingInit,
  setStartingHP,
  baseValues,
  onClassChange,
  onHeal,
  onDamage,
}) => {
  return (
    <>
      <div id="wholePage">
        <div className="container items-centered my-app">
          <form>
            <div className="text-center text-base justify-center" id="CVButton">
              <h2 className="w-full text-2xl font-bold text-[#4e3629]">
                Character Vitals
              </h2>
            </div>
            <div className="flex flex-row" id="nameLevel">
              <span className="w-2/3 flex flex-col text-center items-center">
                <label
                  htmlFor="characterName"
                  className="leading-7 text-base text-gray-600"
                >
                  Character Name:
                </label>
                <input
                  className="itemInput w-full bg-white rounded border border-gray-300 focus:border-lime-800 focus:ring-2 focus:ring-lime-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  type="text"
                  id="characterName"
                  required
                />
              </span>
              <span className="w-1/3 flex flex-col text-center align-middle items-center pl-2">
                <label
                  htmlFor="characterLevel"
                  className="leading-7 text-base text-gray-600"
                >
                  Level:
                </label>
                <input
                  className="itemInput w-12 bg-white rounded border border-gray-300 focus:border-lime-800 focus:ring-2 focus:ring-lime-300 text-base outline-none text-gray-700 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                  type="number"
                  required
                  placeholder="1"
                  min="1"
                  id="characterLevel"
                />
              </span>
              <span className="w-2/3 flex flex-col text-center items-center">
                <label
                  htmlFor="proficiency"
                  className="leading-7 text-base text-gray-600"
                >
                  Proficiency Bonus:
                </label>
                <input
                  className="itemInput w-12 bg-white rounded border border-gray-300 focus:border-lime-800 focus:ring-2 focus:ring-lime-300 text-base outline-none text-gray-700 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                  type="number"
                  id="proficiency"
                  required
                  placeholder="2"
                />
              </span>
            </div>
            <div className="flex flex-wrap flex-row items-center text-center text-base gap-2 justify-center">
              <span className="w-12/24 flex flex-col text-center items-center">
                <label
                  htmlFor="characterClass"
                  className="leading-7 text-base text-gray-600"
                >
                  Class:
                </label>
                <select
                  data-te-select-init
                  className="w-full bg-white rounded border border-gray-300 focus:border-lime-800 focus:ring-2 focus:ring-lime-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  type="text"
                  id="characterClass"
                  required
                  defaultValue="none"
                  onChange={onClassChange}
                >
                  <option value="none" disabled hidden>
                    Select a Class
                  </option>
                  {classOptions.map((group) =>
                    group.options.map((classOption) => (
                      <option key={classOption.value} value={classOption.value}>
                        {classOption.label}
                      </option>
                    ))
                  )}
                </select>
              </span>
              <span className="w-12/24 flex flex-col text-center items-center">
                <label
                  htmlFor="characterRace"
                  className="leading-7 text-base text-gray-600"
                >
                  Race:
                </label>
                <select
                  className="w-full bg-white rounded border border-gray-300 focus:border-lime-800 focus:ring-2 focus:ring-lime-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  type="text"
                  id="characterRace"
                  required
                  defaultValue="none"
                >
                  <option value="none" disabled hidden>
                    Select a Race
                  </option>
                  <optgroup label="Core">
                    <option value="human">Human</option>
                    <option value="dwarf">Dwarf</option>
                    <option value="elf">Elf</option>
                    <option value="gnome">Gnome</option>
                    <option value="half-elf">Half-Elf</option>
                    <option value="half-orc">Half-Orc</option>
                    <option value="halfling">Halfling</option>
                    <option value="aasimar">Aasimar</option>
                  </optgroup>
                  <optgroup label="Featured">
                    <option value="catfolk">Catfolk</option>
                    <option value="dhampir">Dhampir</option>
                    <option value="drow">Drow</option>
                    <option value="drow-noble">Drow Noble</option>
                    <option value="fetchling">Fetchling</option>
                    <option value="goblin">Goblin</option>
                    <option value="hobgoblin">Hobgoblin</option>
                    <option value="ifrit">Ifrit</option>
                    <option value="kobold">Kobold</option>
                    <option value="orc">Orc</option>
                    <option value="oread">Oread</option>
                    <option value="ratfolk">Ratfolk</option>
                    <option value="sylph">Sylph</option>
                    <option value="tengu">Tengu</option>
                    <option value="tiefling">Tiefling</option>
                    <option value="undine">Undine</option>
                  </optgroup>
                </select>
              </span>
            </div>
          </form>
          <div
            className="flex flex-row w-full gap-2 justify-center text-center"
            id="hitClassStack"
          >
            <div className="flex flex-col w-7/12">
              <label
                htmlFor="hitPoints"
                className="leading-7 text-base text-gray-600"
              >
                Hit Points:
              </label>
              <div className="flex flex-row justify-center gap-1">
                <div className="buttonContainer flex flex-col items-start text-xs gap-1">
                  <button
                    onClick={onHeal}
                    className="border-2 text-center w-full"
                  >
                    Heal
                  </button>
                  <button
                    onClick={onDamage}
                    className="border-2 text-center w-full px-2"
                  >
                    Damage
                  </button>
                </div>
                <div className="flex justify-center text-center items-center">
                  <input
                    value={currentHP}
                    readOnly
                    className="w-12 text-base text-center bg-white rounded border border-gray-300 focus:border-lime-800 focus:ring-2 focus:ring-lime-300 text-base outline-none text-gray-700 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                    type="number"
                    required
                    min="0"
                    id="hitPoints"
                  />
                  <span className="ml-2 text-base text-gray-600">
                    {" "}
                    /
                    <input
                      value={startingHP}
                      onChange={(e) => setStartingHP(e.target.value)}
                      className="w-12 text-base text-center bg-white rounded border border-gray-300 focus:border-lime-800 focus:ring-2 focus:ring-lime-300 text-base outline-none text-gray-700 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                      type="number"
                      required
                      min="0"
                      id="startingHP"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="w-4/12 flex flex-col items-center text-center">
              <label
                htmlFor="armorClass"
                className="leading-7 text-base text-gray-600"
              >
                AC:
              </label>
              <input
                className="w-12 text-base text-center bg-white rounded border border-gray-300 focus:border-lime-800 focus:ring-2 focus:ring-lime-300 text-base outline-none text-gray-700 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                type="number"
                required
                min="0"
                id="armorClass"
              />
            </div>
            <div className="w-4/12 flex flex-col items-center text-center">
              <label
                htmlFor="armorClass"
                className="leading-7 text-base text-gray-600"
              >
                Initiative:
              </label>
              <input
                value={startingInit}
                onChange={(e) => setStartingInit(e.target.value)}
                className="w-12 text-base text-center bg-white rounded border border-gray-300 focus:border-lime-800 focus:ring-2 focus:ring-lime-300 text-base outline-none text-gray-700 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                type="number"
                required
                min="0"
                id="initiative"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCharacterContainer;
