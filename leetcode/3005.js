/**
 * https://leetcode.com/problems/count-elements-with-maximum-frequency/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  let maximum = 0;
  const obj = nums.reduce((acc, cur) => {
    if (acc[cur]) acc[cur]++;
    else acc[cur] = 1;
    maximum = Math.max(acc[cur], maximum);
    return acc;
  }, {});

  let answer = 0;
  Object.entries(obj).forEach(([key, value]) => {
    if (value === maximum) answer += value;
  });
  return answer;
};

module.exports = maxFrequencyElements;
