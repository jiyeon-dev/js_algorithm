/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/72410
 */
function solution(new_id) {
  // 단계1~2) 소문자로 치환, 소문자, 숫자, -, _, . 제외한 값 제거
  let str = new_id.replace(/[^A-Za-z0-9-_.]/gi, "").toLowerCase();

  // 단계3) 마침표 두번 이상 반복 시 한 개로 치환
  let i = 0;
  while (true) {
    const dotIndex = str.indexOf(".", i);
    const nextDotIndex = str.indexOf(".", dotIndex + 1);
    if (nextDotIndex === -1) break;
    if (dotIndex + 1 === nextDotIndex) {
      str = str.substring(0, dotIndex) + str.substring(dotIndex + 1);
    } else {
      i = nextDotIndex;
    }
  }

  // 단계 4) 앞 뒤 마침표 제거
  if (str.startsWith(".")) str = str.substring(1);
  if (str.endsWith(".")) str = str.substring(0, str.length - 1);

  // 단계 5) 빈 문자열인 경우 "a"
  if (!str) str = "a";

  // 단계 6) 15자 까지만 허용, 마지막 마침표인 경우 마침표 제거
  str = str.substring(0, 15);
  if (str.endsWith(".")) str = str.substring(0, str.length - 1);

  // 단계 7) 2자 이하면 마지막 문자를 3자리 될때까지 반복
  str = str.padEnd(3, str.at(-1));

  return str;
}

// 다른 사람 풀이 - 정규식 + 체이닝으로 해결 🧐
// function solution(new_id) {
//   const answer = new_id
//     .toLowerCase() // 1
//     .replace(/[^\w-_.]/g, "") // 2
//     .replace(/\.+/g, ".") // 3
//     .replace(/^\.|\.$/g, "") // 4
//     .replace(/^$/, "a") // 5
//     .slice(0, 15)
//     .replace(/\.$/, ""); // 6
//   return answer.padEnd(3, answer.at(-1));
// }

module.exports = solution;
