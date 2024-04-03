/**
 * https://leetcode.com/problems/set-matrix-zeroes/description/
 *
 * in place 로 구현해야함.
 */
var setZeroes = function (matrix) {
  // find zeroes
  const rows = new Set();
  const cols = new Set();
  matrix.forEach((row, i) => {
    row.forEach((col, j) => {
      if (col === 0) {
        rows.add(j);
        cols.add(i);
      }
    });
  });

  // set zeroes
  matrix.forEach((row, i) => {
    row.forEach((_, j) => {
      if (cols.has(i)) matrix[i][j] = 0;
      if (rows.has(j)) matrix[i][j] = 0;
    });
  });

  return matrix;
};

module.exports = setZeroes;
