/**
 * https://leetcode.com/problems/find-the-town-judge/description/
 */
var findJudge = function (n, trust) {
  let obj = {};
  let judge = {};

  trust.forEach((arr) => {
    obj[arr[0]] = arr[1];
    if (judge[arr[1]]) judge[arr[1]].push(arr[0]);
    else judge[arr[1]] = [arr[0]];
  });

  const person = Object.keys(obj);
  if (person.length + 1 !== n) return -1;

  let answer = 1;
  let result = 0;
  Object.entries(judge).forEach(([user, vote]) => {
    if (vote.length > result) {
      result = Math.max(result, vote.length);
      answer = user;
    }
  });

  if (result !== n - 1) return -1;
  else return +answer;
};

module.exports = findJudge;
