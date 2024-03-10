const generalRollDice = (diceAmount, diceSize, modifier) => {
  const rolls = Array.from(
    { length: diceAmount },
    () => Math.floor(Math.random() * diceSize) + 1
  );

  const totalResult = rolls.reduce((sum, roll) => sum + roll, 0) + modifier;
  console.log("Rolls:", rolls);
  console.log("Modifier:", modifier);
  console.log("Total Result:", totalResult);

  return {
    rolls,
    modifier,
    totalResult,
  };
};

export default generalRollDice;
