/**
 * https://leetcode.com/problems/minimum-increment-to-make-array-unique/description/
 */
var minIncrementForUnique = function (nums) {
  nums.sort((a, b) => a - b);

  let count = 0;
  let prevNum = -1;
  nums.forEach((curNum, i) => {
    let num = curNum;
    if (prevNum >= curNum) {
      count += prevNum - curNum + 1;
      num = prevNum + 1;
    }
    prevNum = num;
  });
  return count;
};

module.exports = minIncrementForUnique;

// // time limit exceeded
// var minIncrementForUnique = function (nums) {
//   const set = new Set();

//   let count = 0;
//   let i = 0;
//   while (i < nums.length) {
//     let num = nums[i];

//     if (set.has(num)) {
//       nums[i] = nums[i] + 1;
//       count++;
//     } else {
//       set.add(num);
//       i++;
//     }
//   }

//   return count;
// };
