/**
 * https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  // 내림차순 정렬
  nums.sort((a, b) => Math.abs(b) - Math.abs(a));

  let i = 0;
  while (i < nums.length) {
    const a = nums[i];
    const b = nums[i + 1];

    if (Math.abs(a) === Math.abs(b) && a !== b) {
      return a;
    } else {
      i++;
    }
  }
  return -1;
};

module.exports = findMaxK;

console.log(findMaxK([-1, 10, 6, 7, -7, 1]));
console.log(findMaxK([-9, -43, 24, -23, -16, -30, -38, -30]));
