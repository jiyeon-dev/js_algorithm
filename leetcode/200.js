/**
 * https://leetcode.com/problems/number-of-islands/description/
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;

  const visited = new Array(grid.length)
    .fill()
    .map(() => new Array(grid[0].length).fill(false));

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1" && visited[i][j] === false) {
        visitIsland(grid, i, j, visited);
        count++;
      }
    }
  }
  return count;
};

// 방문 여부 체크
function visitIsland(grid, i, j, visited) {
  const stack = [[i, j]];
  while (stack.length) {
    const [x, y] = stack.pop();
    if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) continue;
    if (grid[x][y] === "0" || visited[x][y]) continue;

    visited[x][y] = true;
    if (x - 1 > -1) stack.push([x - 1, y]);
    if (x + 1 < grid.length) stack.push([x + 1, y]);
    if (grid[x][y - 1]) stack.push([x, y - 1]);
    if (grid[x][y + 1]) stack.push([x, y + 1]);
  }
}

module.exports = numIslands;
