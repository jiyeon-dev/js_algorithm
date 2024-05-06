/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/76502
 */
function solution(s) {
  let str = s;
  let pos = 0;

  while (pos < s.length) {
    const pairs = [];
    const stack = [];

    let flag = true;
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      count++;
      const cur = str[i];
      if (cur === "{" || cur === "[" || cur === "(") {
        stack.push(cur);
      } else {
        const prev = stack.pop();
        if (
          (cur === "}" && prev === "{") ||
          (cur === "]" && prev === "[") ||
          (cur === ")" && prev === "(")
        ) {
        } else {
          flag = false;
          break;
        }
      }

      if (stack.length === 0) {
        pairs.push(count);
        count = 0;
      }
    }

    if (flag) {
      return pairs.length;
    } else {
      pos++;
      str = s.substring(pos, s.length) + s.substring(0, pos);
    }
  }

  return 0;
}

module.exports = solution;
