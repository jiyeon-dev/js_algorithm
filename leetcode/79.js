/**
 * https://leetcode.com/problems/word-search/description/
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const dfs = (board, i, j, index) => {
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length)
      return false;
    if (board[i][j] !== word[index]) return false;
    if (index === word.length - 1) return true;

    // 방문한 곳 체크
    const temp = board[i][j];
    board[i][j] = false;

    // 상하좌우
    const result =
      dfs(board, i + 1, j, index + 1) ||
      dfs(board, i - 1, j, index + 1) ||
      dfs(board, i, j - 1, index + 1) ||
      dfs(board, i, j + 1, index + 1);

    board[i][j] = temp;
    return result;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        if (dfs(board, i, j, 0)) return true;
      }
    }
  }

  return false;
};

module.exports = exist;
