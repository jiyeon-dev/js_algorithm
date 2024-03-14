/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/131128?language=javascript
 */
function solution(X, Y) {
  let answer = "";
  const target = {};

  // X 를 객체로 변경
  for (let i = 0; i < X.length; i++) {
    target[X[i]] = target[X[i]] ? target[X[i]] + 1 : 1;
  }
  // Y 돌면서 짝꿍 체크
  for (let i = 0; i < Y.length; i++) {
    const num = Y[i];
    if (target[num]) {
      target[num] = target[num] - 1;
      answer += num;
    }
  }

  if (!answer) return "-1";
  else if (answer[0] === "0") return "0";
  else
    return answer
      .split("")
      .sort((a, b) => b - a)
      .join("");
}

module.exports = solution;

// // 11~15 시간초과
// function solution(X, Y) {
//   let answer = "";
//   const nX = X.split("").sort((a, b) => b - a);

//   nX.map((num) => {
//     if (Y.indexOf(num) > -1) {
//       answer += num;
//       Y = Y.replace(`${num}`, "");
//     }
//   });

//   if (!answer) return "-1";
//   else if (answer[0] === "0") return "0";
//   else return answer;
// }

// // 11~15 시간초과
// function solution(X, Y) {
//   var answer = "";
//   const obj = {};

//   for (let i = 0; i < X.length; i++) {
//     const num = X[i];
//     const startIndex = obj[num] ? obj[num].at(-1) + 1 : 0;
//     const yIndex = Y.indexOf(num, startIndex);
//     if (yIndex > -1) {
//       obj[num] = obj[num] ? [...obj[num], yIndex] : [yIndex];
//     }
//   }

//   if (Object.keys(obj).length === 0) return "-1";
//   else if (Object.keys(obj).every((num) => num === "0")) return "0";

//   // 짝꿍 문자열 생성
//   Object.keys(obj).map((num) => {
//     answer += num.repeat(obj[num].length);
//   });

//   return answer
//     .split("")
//     .sort((a, b) => b - a)
//     .join("");
// }
