const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatTimes = options.repeatTimes ?? 1;
  const separator = options.separator ?? "+";
  let addition = options.addition ?? "";
  if (options.addition === null) {
    addition += "null";
  }
  const additionRepeatTimes = options.additionRepeatTimes ?? 1;
  const additionSeparator = options.additionSeparator ?? "|";

  let additionRepeatString = "";
  for (let i = 1; i <= additionRepeatTimes; i += 1) {
    if (i < additionRepeatTimes) {
      additionRepeatString += addition + additionSeparator;
    } else {
      additionRepeatString += addition;
    }
  }
  let result = "";
  for (let i = 1; i <= repeatTimes; i += 1) {
    if (i < repeatTimes) {
      result += str + additionRepeatString + separator;
    } else {
      result += str + additionRepeatString;
    }
  }
  return result;
}

module.exports = {
  repeater,
};
