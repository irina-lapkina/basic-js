const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const cleanedMembers = members
    .filter((item) => typeof item === "string" && item.trim().length > 0)
    .map((item) => item.trim());

  if (cleanedMembers.length === 0) {
    return false;
  }

  const letters = cleanedMembers.map((el) => el[0].toUpperCase()).sort();

  return letters.join("");
}

module.exports = {
  createDreamTeam,
};
