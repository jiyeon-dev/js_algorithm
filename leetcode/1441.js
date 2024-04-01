/**
 * https://leetcode.com/problems/build-an-array-with-stack-operations/description/
 */
var buildArray = function (target, n) {
  let answer = [];

  let i = 0; // target index;
  let cur = 1; // current number
  while (cur <= n) {
    answer.push("Push");
    if (target[i] !== cur) answer.push("Pop");
    else i++;
    cur++;
    if (target[i] === undefined) break;
  }
  console.log(answer);
  return answer;
};

module.exports = buildArray;
buildArray([1, 3], 3);
