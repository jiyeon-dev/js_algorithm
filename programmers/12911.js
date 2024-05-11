/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12911
 */
function solution(n) {
  const countOne = n.toString(2).match(/1/gi).length;
  while (true) {
    n = n + 1;
    if (n.toString(2).match(/1/gi).length === countOne) return n;
  }
}

module.exports = solution;
