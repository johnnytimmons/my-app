import React from "react";
const AddCharacter = () => {
  return (
    <>
      <div id="wholePage">
        <div
          className="container items-centercd my-app
        "
        >
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
                  className="itemInput w-full bg-white rounded border border-gray-300 focus:border-lime-800 focus:ring-2 focus:ring-lime-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  type="text"
                  type="number"
                  required
                  placeholder="1"
                  min="1"
                  id="characterLevel"
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
                >
                  <option value="none" disabled hidden>
                    Select a Class
                  </option>
                  <optgroup label="Core">
                    <option value="barbarian">Barbarian</option>
                    <option value="bard">Bard</option>
                    <option value="cleric">Cleric</option>
                    <option value="druid">Druid</option>
                    <option value="fighter">Fighter</option>
                    <option value="monk">Monk</option>
                    <option value="paladin">Paladin</option>
                    <option value="ranger">Ranger</option>
                    <option value="rogue">Rogue</option>
                    <option value="sorcerer">Sorcerer</option>
                    <option value="wizard">Wizard</option>
                  </optgroup>
                  <optgroup label="Base">
                    <option value="alchemist">Alchemist</option>
                    <option value="cavalier">Cavalier</option>
                    <option value="gunslinger">Gunslinger</option>
                    <option value="inquisitor">Inquisitor</option>
                    <option value="magus">Magus</option>
                    <option value="oracle">Oracle</option>
                    <option value="shifter">Shifter</option>
                    <option value="omdura">Omdura</option>
                    <option value="summoner">Summoner</option>
                    <option value="vigilante">Vigilante</option>
                    <option value="witch">Witch</option>
                  </optgroup>
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
            className="flex row w-2/3 gap-2 justify-center"
            id="hitClassStack"
          >
            <span className="flex flex-col text-center items-center">
              <label
                htmlFor="hitPoints"
                className="leading-7 text-base text-gray-600"
              >
                HP:
              </label>
              <input
                className="w-1/2 bg-white rounded border border-gray-300 focus:border-lime-800 focus:ring-2 focus:ring-lime-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="number"
                required
                min="0"
                id="hitPoints"
              />
            </span>
            <span className="flex flex-col items-center text-center">
              <label
                htmlFor="armorClass"
                className="leading-7 text-base text-gray-600"
              >
                AC:
              </label>
              <input
                className="w-1/2 bg-white rounded border border-gray-300 focus:border-lime-800 focus:ring-2 focus:ring-lime-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="number"
                required
                min="0"
                id="armorClass"
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCharacter;
