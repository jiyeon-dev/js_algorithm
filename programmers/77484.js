/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/77484
 */
function solution(lottos, win_nums) {
  const rank = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 };
  let matched = 0,
    zero = 0;
  lottos.forEach((num) => {
    if (num === 0) zero++;
    else if (win_nums.indexOf(num) > -1) matched++;
  });

  return [rank[matched + zero], rank[matched]];
}

module.exports = solution;
