/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/161989
 */
function solution(n, m, section) {
  let answer = 0;
  let painted = 0; // 어디까지 칠했는지 저장
  section.forEach((start) => {
    // 안칠한 부분인 경우
    if (start > painted) {
      painted = start + m - 1; // 새로 페인트
      answer++;
    }
  });
  return answer;
}

module.exports = solution;
