const convertToCelsius = function (temperature) {
  const newTemperature = (5 / 9) * (temperature - 32);
  if (Number.isInteger(newTemperature)) return newTemperature;
  return +newTemperature.toFixed(1);
};

const convertToFahrenheit = function (temperature) {
  const newTemperature = (9 / 5) * temperature + 32;
  if (Number.isInteger(newTemperature)) return newTemperature;
  return +newTemperature.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
