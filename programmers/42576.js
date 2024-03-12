/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42576
 */
function solution(participant, completion) {
  // 참가자 리스트를 객체로 변경
  const obj = {};
  participant.map((user) => {
    obj[user] = obj[user] ? obj[user] + 1 : 1;
  });

  // 완주한 사람 제거
  completion.forEach((user) => {
    obj[user] -= 1;
    if (obj[user] === 0) delete obj[user];
  });

  return Object.keys(obj)[0];
}

module.exports = solution;
