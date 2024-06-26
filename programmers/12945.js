/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12945
 */
function solution(n) {
  const memo = { 0: 0, 1: 1 };

  for (let i = 2; i <= n; i++) {
    memo[i] = (memo[i - 1] + memo[i - 2]) % 1234567;
  }

  return memo[n];
}

module.exports = solution;
