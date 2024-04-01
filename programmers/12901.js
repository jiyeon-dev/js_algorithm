/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12901
 * = 2016년 1월 1일 => 금
 * = 윤년(29)
 */
function solution(a, b) {
  const weekday = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const days =
    monthDays.slice(0, a - 1).reduce((acc, cur) => (acc += cur), 0) + b;

  let index = (days % 7) - 1;
  if (index < 0) index = 6;

  return weekday[index];
}

module.exports = solution;
