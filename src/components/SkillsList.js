import React from "react";
import EnterModifier from "./EnterModifier";

const SkillsList = ({ baseValues = {}, handleStatChange }) => {
  return (
    <div>
      <EnterModifier
        label="Acrobatics"
        keyAbility="Dex"
        baseValue={baseValues.Dex}
        onChange={(newModifier) => handleStatChange("Dex", newModifier)}
      />
      <EnterModifier
        label="Appraise"
        keyAbility="Int"
        baseValue={baseValues.Int}
        onChange={(newModifier) => handleStatChange("Int", newModifier)}
      />
      <EnterModifier
        label="Bluff"
        keyAbility="Cha"
        baseValue={baseValues.Cha}
        onChange={(newModifier) => handleStatChange("Cha", newModifier)}
      />
      <EnterModifier
        label="Climb"
        keyAbility="Str"
        baseValue={baseValues.Str}
        onChange={(newModifier) => handleStatChange("Str", newModifier)}
      />
      <EnterModifier
        label="Craft"
        keyAbility="Int"
        baseValue={baseValues.Int}
        onChange={(newModifier) => handleStatChange("Int", newModifier)}
      />
      <EnterModifier
        label="Diplomacy"
        keyAbility="Cha"
        baseValue={baseValues.Cha}
        onChange={(newModifier) => handleStatChange("Cha", newModifier)}
      />
      <EnterModifier
        label="Disable Device"
        keyAbility="Dex"
        baseValue={baseValues.Dex}
        onChange={(newModifier) => handleStatChange("Dex", newModifier)}
      />
      <EnterModifier
        label="Disguise"
        keyAbility="Cha"
        baseValue={baseValues.Cha}
        onChange={(newModifier) => handleStatChange("Cha", newModifier)}
      />
      <EnterModifier
        label="Escape Artist"
        keyAbility="Dex"
        baseValue={baseValues.Dex}
        onChange={(newModifier) => handleStatChange("Dex", newModifier)}
      />
      <EnterModifier
        label="Fly"
        keyAbility="Dex"
        baseValue={baseValues.Dex}
        onChange={(newModifier) => handleStatChange("Dex", newModifier)}
      />
      <EnterModifier
        label="Handle Animal"
        keyAbility="Cha"
        baseValue={baseValues.Cha}
        onChange={(newModifier) => handleStatChange("Cha", newModifier)}
      />
      <EnterModifier
        label="Heal"
        keyAbility="Wis"
        baseValue={baseValues.Wis}
        onChange={(newModifier) => handleStatChange("Wis", newModifier)}
      />
      <EnterModifier
        label="Intimidate"
        keyAbility="Cha"
        baseValue={baseValues.Cha}
        onChange={(newModifier) => handleStatChange("Cha", newModifier)}
      />
      <EnterModifier
        label="Knowledge (arcana)"
        keyAbility="Int"
        baseValue={baseValues.Int}
        onChange={(newModifier) => handleStatChange("Int", newModifier)}
      />
      <EnterModifier
        label="Knowledge (dungeoneering)"
        keyAbility="Int"
        baseValue={baseValues.Int}
        onChange={(newModifier) => handleStatChange("Int", newModifier)}
      />
      <EnterModifier
        label="Knowledge (engineering)"
        keyAbility="Int"
        baseValue={baseValues.Int}
        onChange={(newModifier) => handleStatChange("Int", newModifier)}
      />
      <EnterModifier
        label="Knowledge (geography)"
        keyAbility="Int"
        baseValue={baseValues.Int}
        onChange={(newModifier) => handleStatChange("Int", newModifier)}
      />
      <EnterModifier
        label="Knowledge (history)"
        keyAbility="Int"
        baseValue={baseValues.Int}
        onChange={(newModifier) => handleStatChange("Int", newModifier)}
      />
      <EnterModifier
        label="Knowledge (local)"
        keyAbility="Int"
        baseValue={baseValues.Int}
        onChange={(newModifier) => handleStatChange("Int", newModifier)}
      />
      <EnterModifier
        label="Knowledge (nature)"
        keyAbility="Int"
        baseValue={baseValues.Int}
        onChange={(newModifier) => handleStatChange("Int", newModifier)}
      />
      <EnterModifier
        label="Knowledge (nobility)"
        keyAbility="Int"
        baseValue={baseValues.Int}
        onChange={(newModifier) => handleStatChange("Int", newModifier)}
      />
      <EnterModifier
        label="Knowledge (planes)"
        keyAbility="Int"
        baseValue={baseValues.Int}
        onChange={(newModifier) => handleStatChange("Int", newModifier)}
      />
      <EnterModifier
        label="Knowledge (religion)"
        keyAbility="Int"
        baseValue={baseValues.Int}
        onChange={(newModifier) => handleStatChange("Int", newModifier)}
      />
      <EnterModifier
        label="Linguistics"
        keyAbility="Int"
        baseValue={baseValues.Int}
        onChange={(newModifier) => handleStatChange("Int", newModifier)}
      />
      <EnterModifier
        label="Perception"
        keyAbility="Wis"
        baseValue={baseValues.Wis}
        onChange={(newModifier) => handleStatChange("Wis", newModifier)}
      />
      <EnterModifier
        label="Perform"
        keyAbility="Cha"
        baseValue={baseValues.Cha}
        onChange={(newModifier) => handleStatChange("Cha", newModifier)}
      />
      <EnterModifier
        label="Profession"
        keyAbility="Wis"
        baseValue={baseValues.Wis}
        onChange={(newModifier) => handleStatChange("Wis", newModifier)}
      />
      <EnterModifier
        label="Ride"
        keyAbility="Dex"
        baseValue={baseValues.Dex}
        onChange={(newModifier) => handleStatChange("Dex", newModifier)}
      />
      <EnterModifier
        label="Sense Motive"
        keyAbility="Wis"
        baseValue={baseValues.Wis}
        onChange={(newModifier) => handleStatChange("Wis", newModifier)}
      />
      <EnterModifier
        label="Sleight of Hand"
        keyAbility="Dex"
        baseValue={baseValues.Dex}
        onChange={(newModifier) => handleStatChange("Dex", newModifier)}
      />
      <EnterModifier
        label="Spellcraft"
        keyAbility="Int"
        baseValue={baseValues.Int}
        onChange={(newModifier) => handleStatChange("Int", newModifier)}
      />
      <EnterModifier
        label="Stealth"
        keyAbility="Dex"
        baseValue={baseValues.Dex}
        onChange={(newModifier) => handleStatChange("Dex", newModifier)}
      />
      <EnterModifier
        label="Survival"
        keyAbility="Wis"
        baseValue={baseValues.Wis}
        onChange={(newModifier) => handleStatChange("Wis", newModifier)}
      />
      <EnterModifier
        label="Swim"
        keyAbility="Str"
        baseValue={baseValues.Str}
        onChange={(newModifier) => handleStatChange("Str", newModifier)}
      />
      <EnterModifier
        label="Use Magic Device"
        keyAbility="Cha"
        baseValue={baseValues.Cha}
        onChange={(newModifier) => handleStatChange("Cha", newModifier)}
      />
    </div>
  );
};

export default SkillsList;
