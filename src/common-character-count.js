const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  function makeHash(str) {
    const hash = {};
    for (let i = 0; i < str.length; i += 1) {
      const key = str[i];
      if (hash[key]) {
        hash[key] += 1;
      } else {
        hash[key] = 1;
      }
    }
    return hash;
  }
  const hash1 = makeHash(s1);
  const hash2 = makeHash(s2);
  let counter = 0;
  for (const key in hash1) {
    if (hash2[key]) {
      counter += Math.min(hash1[key], hash2[key]);
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount,
};
