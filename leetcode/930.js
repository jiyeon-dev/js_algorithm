/**
 *  https://leetcode.com/problems/binary-subarrays-with-sum/description/
 */
var numSubarraysWithSum = function (nums, goal) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === goal) count++;
      else if (sum > goal) break;
    }
  }

  return count;
};

// // 시간 초과 - 배열을 매번 생성하다보니 시간 초과 발생
// var numSubarraysWithSum = function (nums, goal) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     nums.slice(i).reduce((acc, cur, i, arr) => {
//       if (acc + cur === goal) count++;
//       else if (acc + cur > goal) arr.splice(1);
//       return acc + cur;
//     }, 0);
//   }
//   return count;
// };

module.exports = numSubarraysWithSum;
