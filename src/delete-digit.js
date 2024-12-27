const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  const arr = str.split("");
  const resultArr = [];
  for (i = 0; i < arr.length; i += 1) {
    const newArr = [...arr];
    newArr.splice(i, 1);
    const num = newArr.join("");
    resultArr.push(num);
  }
  return Math.max(...resultArr);
}

module.exports = {
  deleteDigit,
};
