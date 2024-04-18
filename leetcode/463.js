/**
 * https://leetcode.com/problems/island-perimeter/description/
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    const prevRow = grid[i - 1];
    const curRow = grid[i];
    const nextRow = grid[i + 1];

    curRow.forEach((col, j) => {
      if (col === 1) {
        // 현재 행 좌우 테두리 체크
        const prevCol = curRow[j - 1] || 0;
        const nextCol = curRow[j + 1] || 0;
        if (prevCol === 0) count += 1;
        if (nextCol === 0) count += 1;

        // 위아래 테두리 체크
        const prevRowCol = prevRow ? prevRow[j] : 0;
        const nextRowCol = nextRow ? nextRow[j] : 0;
        if (prevRowCol === 0) count += 1;
        if (nextRowCol === 0) count += 1;
      }
    });
  }
  console.log(count);
  return count;
};

module.exports = islandPerimeter;
