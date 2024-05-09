/**
 * https://leetcode.com/problems/maximize-happiness-of-selected-children/
 */
/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function (happiness, k) {
  happiness.sort((a, b) => a - b);

  let answer = 0;
  let count = 0;
  while (k > 0) {
    k--;
    let happy = happiness.pop() - count;
    if (happy <= 0) break;
    answer += happy;
    count++;
  }

  return answer;
};

module.exports = maximumHappinessSum;
