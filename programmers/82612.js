/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/82612
 */
function solution(price, money, count) {
  let temp = 0;
  for (let i = 1; i <= count; i++) {
    temp += price * i;
  }

  let remain = money - temp;
  if (remain < 0) return Math.abs(money - temp);
  else return 0;
}

module.exports = solution;
