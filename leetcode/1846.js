/**
 * https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/description/
 */
var maximumElementAfterDecrementingAndRearranging = function (arr) {
  if (arr.length === 1) return 1;
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) arr[i] = 1; // 무조건 첫번째 숫자는 1로 변경
    const num = arr[i];
    const nextNum = arr[i + 1];

    // 1 초과 차이나는 경우 nextNum을 현재 num + 1 로 변경
    if (nextNum - num > 1) arr[i + 1] = num + 1;
  }

  return Math.max(...arr);
};

module.exports = maximumElementAfterDecrementingAndRearranging;
