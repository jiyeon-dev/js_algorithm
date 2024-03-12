/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/155652
 */
function solution(s, skip, index) {
  let answer = "";

  // skip 알파벳 제외
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  skip.split("").forEach((str) => {
    alphabet = alphabet.replace(new RegExp(str, "gi"), "");
  });

  // 조회
  s.split("").forEach((str) => {
    let newStrIndex = alphabet.indexOf(str) + index;
    if (alphabet.length <= newStrIndex) {
      newStrIndex = newStrIndex % alphabet.length;
    }
    answer += alphabet[newStrIndex];
  });

  return answer;
}
module.exports = solution;

// // 3, 17 ~ 19 실패
// function solution(s, skip, index) {
//   let answer = "";

//   // skip 알파벳 제외
//   let alphabet = "abcdefghijklmnopqrstuvwxyz";
//   skip.split("").forEach((str) => {
//     alphabet = alphabet.replace(new RegExp(str, "gi"), "");
//   });

//   // 조회
//   s.split("").forEach((str) => {
//     let newStrIndex = alphabet.indexOf(str) + index;
//     if (alphabet.length <= newStrIndex) {
//       newStrIndex = newStrIndex - alphabet.length;  // 여기가 문제!
//     }
//     console.log(newStrIndex, alphabet[newStrIndex]);
//     answer += alphabet[newStrIndex];
//   });
//   return answer;
// }
