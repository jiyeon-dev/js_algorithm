/**
 *  https://leetcode.com/problems/find-all-duplicates-in-an-array/submissions
 */
var findDuplicates = function (nums) {
  let set = new Set();
  return nums.reduce((prev, cur) => {
    if (set.has(cur)) prev.push(cur);
    else set.add(cur);
    return prev;
  }, []);
};

module.exports = findDuplicates;

// // 성공했으나 두번의 for 문 사용 O(n)
// var findDuplicates = function (nums) {
//   let obj = {};
//   nums.forEach((num) => {
//     if (obj[num]) obj[num] = obj[num] + 1;
//     else obj[num] = 1;
//   });
//   let answer = [];
//   for (let [key, count] of Object.entries(obj)) {
//     if (count > 1) answer.push(+key);
//   }
//   console.log(answer);
//   return answer;
// };
