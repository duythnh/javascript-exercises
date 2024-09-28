const repeatString = function (word, numRepeat) {
  result = "";
  if (numRepeat < 0) return "ERROR";
  for (let i = 0; i < numRepeat; i++) {
    result += word;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
