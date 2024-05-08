/**
 * https://leetcode.com/problems/relative-ranks/
 */
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const answer = [];
  score.forEach((value, index, arr) => {
    const biggerCount = arr.filter((val) => val > value).length;
    if (biggerCount === 0) answer.push("Gold Medal");
    else if (biggerCount === 1) answer.push("Silver Medal");
    else if (biggerCount === 2) answer.push("Bronze Medal");
    else answer.push((biggerCount + 1).toString());
  });
  return answer;
};

module.exports = findRelativeRanks;
