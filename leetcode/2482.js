/**
 * https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/description/
 */
var onesMinusZeros = function (grid) {
  const diff = [];
  const cols = new Array(grid.length); // col 에서 zero, one 계산 값 저장

  for (let i = 0; i < grid.length; i++) {
    let zerosRow = grid[i].filter((col) => col === 0).length;
    let onesRow = grid[i].length - zerosRow;

    const temp = [];
    for (let j = 0; j < grid[i].length; j++) {
      // col 계산하지 않은 경우에만 계산
      if (cols[j] === undefined) {
        let zerosCol = grid.reduce((acc, cur) => {
          if (cur[j] === 0) acc = acc + 1;
          return acc;
        }, 0);

        let onesCol = grid.length - zerosCol;
        cols[j] = onesCol - zerosCol;
      }
      temp[j] = onesRow - zerosRow + cols[j];
    }

    diff.push(temp);
  }

  return diff;
};

module.exports = onesMinusZeros;
