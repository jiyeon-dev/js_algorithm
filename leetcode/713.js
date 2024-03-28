/**
 * https://leetcode.com/problems/subarray-product-less-than-k/description
 *
 * * `연속 하위 배열` 이기 때문에 sort 불가
 * * 보다 작아야함. ( x < k )
 *
 * 중첩 for 문으로 해결하려고 하니 시간 초과 발생.
 * 구글링 해보니 두개의 포인터로 해결하면 시간이 O(n)이 걸리므로 통과 가능
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0;
  let cnt = 0;
  let j = 0;
  let temp = 1;
  for (let i = 0; i < nums.length; i++) {
    temp *= nums[i];
    while (temp >= k) {
      temp /= nums[j];
      j += 1;
    }
    cnt += i - j + 1;
  }
  return cnt;
};

module.exports = numSubarrayProductLessThanK;

// // Time Limit Exceeded 발생
// // 원인 : 시간 O(n^2), 공간 O(1)
// var numSubarrayProductLessThanK = function (nums, k) {
//   let cnt = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let temp = 1;

//     for (let j = i; j < nums.length; j++) {
//       temp = temp * nums[j];
//       if (temp < k) cnt++;
//     }
//   }
//   return cnt;
// };
