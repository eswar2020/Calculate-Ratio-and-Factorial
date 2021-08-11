const ratioOfTwoNumbers = require("../ratio/index");
const factorialOfNumber = require("../factorial/index");

const ratioAndFactorial = function (a, b, c) {
  const ratio = ratioOfTwoNumbers(a, b);
  const factorial = factorialOfNumber(c);
  const myObj = {};
  return (myObj.ratio = factorial);
};

module.exports = ratioAndFactorial;
