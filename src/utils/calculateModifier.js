// CalculateModifier.js
export const calculateModifier = (value) => {
  let modifier = Math.floor((value - 10) / 2);
  return modifier;
};
