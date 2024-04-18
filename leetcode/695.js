/**
 * https://leetcode.com/problems/max-area-of-island/description/
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const rowLength = grid.length;
  const colLength = grid[0].length;

  // 방문 여부 체크
  const visited = new Array(rowLength)
    .fill()
    .map(() => new Array(colLength).fill(false));

  let maxArea = 0;

  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      // 방문 안한 경우
      if (grid[i][j] === 1 && visited[i][j] === false) {
        const area = checkIsland(grid, i, j, visited);
        maxArea = Math.max(area, maxArea);
      }
    }
  }

  return maxArea;
};

const checkIsland = (grid, i, j, visited) => {
  let area = 0;
  const stack = [[i, j]];

  while (stack.length) {
    let [x, y] = stack.pop();

    if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) continue;
    if (visited[x][y] || grid[x][y] === 0) continue;

    visited[x][y] = true;
    area += 1;

    // 상하좌우 스택에 추가
    stack.push([x - 1, y]);
    stack.push([x + 1, y]);
    stack.push([x, y - 1]);
    stack.push([x, y + 1]);
  }

  return area;
};

module.exports = maxAreaOfIsland;
