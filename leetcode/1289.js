/**
 * https://leetcode.com/problems/minimum-falling-path-sum-ii/description/
 *
 * programmers 12913 과 동일
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function (grid) {
  const N = grid.length;
  const M = grid[0].length;

  for (let row = 1; row < N; row++) {
    for (let col = 0; col < M; col++) {
      let min = Infinity;
      for (let index = 0; index < M; index++) {
        if (index !== col) {
          min = Math.min(min, grid[row - 1][index]);
        }
      }

      grid[row][col] += min;
    }
  }

  return Math.min(...grid[M - 1]);
};

module.exports = minFallingPathSum;
