const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  const sum = arr.reduce((total, num) => total + num, 0);
  return sum;
};

const multiply = function (arr) {
  const multi = arr.reduce((multi, num) => multi * num, 1);
  return multi;
};

const power = function (a, b) {
  let result = a
  if (b === 0) {
    return 1;
  }
  for (let i = 1; i < b; i++) {
    result *= a;
  }
  return result;
};

const factorial = function (n) {
  if (n === 0) return 1
  n > 1 ? n *= factorial(n - 1) : 1;
  return n
};

//Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

