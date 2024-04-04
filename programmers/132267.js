/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/132267
 */
function solution(a, b, n) {
  if (n < a) return 0;

  let count = 0;
  let bottles = n; // 전체 빈병 수

  while (bottles >= a) {
    const newBottles = Math.floor(bottles / a) * b; // 새로 받은 콜라
    const leftBottles = bottles - (newBottles / b) * a; // 남은 빈병
    count += newBottles;
    bottles = newBottles + leftBottles;
  }

  return count;
}

module.exports = solution;
