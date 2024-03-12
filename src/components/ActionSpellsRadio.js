import React, { useState } from "react";

const ActionSpellsRadio = () => {
  const [selectedRadio, setSelectedRadio] = useState("radioActions");
  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.id);
  };

  return (
    <div id="addedSpellsActions">
      <div className="radio-inputs  bg-zinc-300">
        <label className="radio" htmlFor="radioActions">
          <input
            type="radio"
            id="radioActions"
            name="radio"
            checked={selectedRadio === "radioActions"}
            onChange={handleRadioChange}
          />
          <span className="name text-1xl font-bold text-[#4e3629]">
            Actions
          </span>
        </label>
        <label className="radio" htmlFor="radioSpells">
          <input
            type="radio"
            id="radioSpells"
            name="radio"
            checked={selectedRadio === "radioSpells"}
            onChange={handleRadioChange}
          />
          <span className="name text-1xl font-bold font text-[#4e3629]">
            Spells
          </span>
        </label>
        <label className="radio" htmlFor="radioBonus">
          <input
            type="radio"
            id="radioBonus"
            name="radio "
            checked={selectedRadio === "radioBonus"}
            onChange={handleRadioChange}
          />
          <span className="name text-1xl font-bold text-[#4e3629]">Bonus</span>
        </label>
      </div>
      {selectedRadio === "radioActions" && (
        <div className=" flex bg-zinc-300 flex-row h-full w-full">
          BLAH BLAH BLAH
        </div>
      )}

      {selectedRadio === "radioSpells" && (
        <div className="flex  bg-zinc-300 flex-row h-full w-ful">
          Blah blah blah
        </div>
      )}

      {selectedRadio === "radioBonus" && (
        <div className="flex  bg-zinc-300 flex-row h-full w-full">
          Blah Blah Blah
        </div>
      )}
    </div>
  );
};

export default ActionSpellsRadio;
