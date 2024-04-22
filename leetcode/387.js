/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (s.indexOf(cur) === s.lastIndexOf(cur)) return i;
  }
  return -1;
};

module.exports = firstUniqChar;

console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));
