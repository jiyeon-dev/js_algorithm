/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/70129
 */
function solution(s) {
  const answer = [0, 0];

  while (Number(s) !== 1) {
    answer[0]++;
    const beforeLength = s.length;
    s = s.replaceAll("0", "");
    answer[1] += beforeLength - s.length;
    s = s.length.toString(2); // 2진수 변경
  }

  return answer;
}

module.exports = solution;
