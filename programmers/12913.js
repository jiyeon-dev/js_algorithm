/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12913
 *
 * leetcode 1289 와 동일
 */
function solution(land) {
  const N = land.length;
  const M = land[0].length;

  for (let row = 1; row < N; row++) {
    for (let col = 0; col < M; col++) {
      let max = 0;
      for (let i = 0; i < M; i++) {
        if (col !== i) {
          max = Math.max(max, land[row - 1][i]);
        }
      }
      land[row][col] += max;
    }
  }

  return Math.max(...land[N - 1]);
}

module.exports = solution;
