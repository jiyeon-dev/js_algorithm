/**
 * https://leetcode.com/problems/first-missing-positive/description/
 * 첫 번째로 누락된 양의 정수의 값 찾기.
 */
var firstMissingPositive = function (nums) {
  let min = 1;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num > 0 && num === min) min++;
    else if (num > min) break;
  }
  return min;
};

module.exports = firstMissingPositive;
