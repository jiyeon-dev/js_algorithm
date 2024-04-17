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

// // Time Limit Exceeded
// var minFallingPathSum = function (matrix) {
//   let answer = Infinity;

//   const dfs = (stack, row, col) => {
//     const curRow = matrix[row];
//     if (col < 0 || col >= matrix[0].length) return;
//     if (!curRow) {
//       const sum = stack.reduce((acc, cur) => acc + cur, 0);
//       answer = Math.min(sum, answer);
//       return;
//     }

//     stack.push(curRow[col]);
//     if (row < matrix.length) {
//       dfs([...stack], row + 1, col - 1); // 왼쪽
//       dfs([...stack], row + 1, col); // 가운데
//       dfs([...stack], row + 1, col + 1); // 오른쪽
//     }
//   };

//   matrix[0].forEach((num, index) => {
//     dfs([num], 1, index - 1); // 왼쪽
//     dfs([num], 1, index); // 가운데
//     dfs([num], 1, index + 1); // 오른쪽
//   });

//   return answer;
// };
