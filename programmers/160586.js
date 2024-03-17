/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/160586
 */
function solution(keymap, targets) {
  var answer = [];

  // 알파벳별로 키패드 누르는 횟수 저장
  const obj = {};
  keymap.forEach((keypad, i) => {
    keypad
      .split("")
      .map((char, j) => (obj[char] = obj[char] < j + 1 ? obj[char] : j + 1));
  });

  // 알파벳 체크
  targets.forEach((target) => {
    let cnt = 0;
    for (let char of target.split("")) {
      if (!obj[char]) {
        cnt = -1;
        break;
      } else cnt += obj[char];
    }
    answer.push(cnt);
  });

  return answer;
}

module.exports = solution;
