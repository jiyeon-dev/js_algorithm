/**
 * https://leetcode.com/problems/longest-common-prefix
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 1) return strs[0];

  strs.sort();
  let answer = "";

  for (let i = 0; i < strs[0].length; i++) {
    if (strs.at(-1)[i] === strs[0][i]) answer += strs[0][i];
    else break;
  }

  return answer;
};

module.exports = longestCommonPrefix;
