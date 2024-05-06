/**
 * https://leetcode.com/problems/boats-to-save-people/description/
 *
 * 주의) 한 boat 에는 최대 2명만 탑승 가능.
 */
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  let boat = 0;
  people.sort((a, b) => a - b);

  let i = 0;
  let j = people.length - 1;

  while (i <= j) {
    const min = people[i];
    const max = people[j];

    if (max + min > limit) {
      j--;
    } else {
      i++;
      j--;
    }

    boat++;
  }

  return boat;
};

module.exports = numRescueBoats;
