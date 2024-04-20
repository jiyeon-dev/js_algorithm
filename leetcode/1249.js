/**
 * https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
 */
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let i = 0;
  let openStack = []; // ( 인덱스 담는 스택
  while (i <= s.length) {
    if (s[i] === "(") {
      openStack.push(i);
      i++;
    } else if (s[i] === ")") {
      if (openStack.length === 0) {
        // ( 가 앞에 없는 경우 제거
        s = s.substring(0, i) + s.substring(i + 1);
      } else {
        openStack.pop();
        i++;
      }
    } else i++;
  }

  // ( 가 남은 경우 제거
  while (openStack.length) {
    const i = openStack.pop();
    s = s.substring(0, i) + s.substring(i + 1);
  }
  return s;
};

module.exports = minRemoveToMakeValid;
