/**
 * https://leetcode.com/problems/largest-local-values-in-a-matrix/
 *
 * grid를 돌면서 3*3에서 가장 큰 수를 matrix에 저장
 */
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  const size = grid.length;
  const answer = [];

  for (let i = 1; i < size - 1; i++) {
    let row = [];
    for (let j = 1; j < size - 1; j++) {
      // 3*3 조회
      let max = 0;
      for (let x = i - 1; x <= i + 1; x++) {
        for (let y = j - 1; y <= j + 1; y++) {
          max = Math.max(grid[x][y], max);
        }
      }
      row.push(max);
    }
    answer.push(row);
  }

  return answer;
};

module.exports = largestLocal;
