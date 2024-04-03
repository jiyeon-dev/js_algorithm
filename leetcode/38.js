/**
 * https://leetcode.com/problems/count-and-say/description/
 */
var countAndSay = function (n) {
  let say = "1";
  if (n === 1) return say;

  for (let i = 1; i < n; i++) {
    let temp = say.split("");
    let j = 1;
    let num = say[0]; // 시작 숫자
    let count = 1; // 같은 숫자 개수
    let newSay = ""; // 새로운 say
    while (j <= temp.length) {
      const cur = temp[j];
      if (num === cur) count++;
      else {
        newSay += `${count}${num}`;
        count = 1;
        num = cur;
      }
      j++;
    }

    say = newSay;
  }

  return say;
};

module.exports = countAndSay;
