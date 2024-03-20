/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/140108
 */
function solution(s) {
  let answer = 0;

  let target = s[0]; // 첫 글자
  let cnt = 0; // 횟수 체크
  s.split("").forEach((char, i) => {
    cnt = target === char ? cnt + 1 : cnt - 1; // 같은면 +1, 다르면 -1
    if (cnt === 0) {
      target = s[i + 1];
      answer++;
    }
  });
  if (cnt !== 0) answer++; // 글자가 남은 경우 + 1
  return answer;
}

module.exports = solution;
