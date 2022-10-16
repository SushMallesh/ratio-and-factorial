const ratioOfTwoNumbers = require("../ratio/index");
const factorialOfNumber = require("../factorial/index");

const ratioAndFactorial = (num1, num2, num3) => {
  const object = {
    ratio: ratioOfTwoNumbers(num1, num2),
    factorial: factorialOfNumber(num3),
  };
  return object;
};

ratioAndFactorial(3, 4, 5);

module.exports = ratioAndFactorial;
