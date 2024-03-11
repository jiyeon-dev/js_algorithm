/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/64061
 */
function solution(board, moves) {
  let answer = 0;
  const stack = [];
  moves.forEach((move) => {
    for (let i = 0; i < board.length; i++) {
      const current = board[i][move - 1];
      if (current > 0) {
        if (!stack.at(-1) || stack.at(-1) !== current) {
          stack.push(current);
        } else {
          stack.pop();
          answer += 2;
        }
        board[i][move - 1] = 0;
        break;
      }
    }
  });

  return answer;
}

module.exports = solution;
