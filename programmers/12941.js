/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12941
 */
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((acc, cur, index) => acc + cur * B[index], 0);
}

module.exports = solution;
