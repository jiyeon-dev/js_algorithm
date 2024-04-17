/**
 * https://leetcode.com/problems/minimum-falling-path-sum/description/
 */
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  let memo = new Array(matrix[0].length).fill(Infinity);
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    let tmp = [];
    for (let j = 0; j < row.length; j++) {
      const min =
        i === 0
          ? Math.min(row[j - 1] || Infinity, row[j], row[j + 1] || Infinity)
          : Math.min(memo[j - 1] || Infinity, memo[j], memo[j + 1] || Infinity);
      tmp[j] = min + (matrix[i + 1]?.[j] || 0);
    }
    memo = [...tmp];
  }

  return Math.min(...memo);
};

module.exports = minFallingPathSum;
