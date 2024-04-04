/**
 * https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/
 *
 * 주의) 숫자, 부호 상관 없이 가장 깊은 괄호만 찾으면 됨.
 */
var maxDepth = function (s) {
  let count = 0;
  let deepCount = 0;
  s.split("").forEach((str) => {
    if (str === "(") count++;
    else if (str === ")") count--;
    deepCount = Math.max(deepCount, count);
  });
  return deepCount;
};

module.exports = maxDepth;
