/**
 * https://leetcode.com/problems/path-with-maximum-gold/
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  const direction = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];
  const n = grid.length;
  const m = grid[0].length;
  let answer = 0;

  const dfs = (i, j, gold) => {
    if (i < 0 || n <= i || j < 0 || m <= j || grid[i][j] === 0) {
      answer = Math.max(gold, answer);
      return;
    }

    let cur = grid[i][j]; // 현재 위치의 골드 값 저장
    grid[i][j] = 0; // 방문 표시

    for (let [x, y] of direction) {
      let nX = i + x;
      let nY = j + y;
      dfs(nX, nY, gold + cur);
    }

    grid[i][j] = cur; // 다른 경로 검색을 위해 원복
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] !== 0) {
        dfs(i, j, 0);
      }
    }
  }

  return answer;
};

module.exports = getMaximumGold;
