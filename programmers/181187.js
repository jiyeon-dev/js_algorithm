/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/181187
 * - 원의 방정식 : x**2 + y**2 = r**2
 */
function solution(r1, r2) {
  let count = 0;
  for (let x = 1; x <= r2; x++) {
    const maxH = Math.floor(Math.sqrt(r2 ** 2 - x ** 2));
    const minH = Math.ceil(Math.sqrt(r1 ** 2 - x ** 2)) || 0;
    count += maxH - minH + 1;
  }
  return count * 4;
}

module.exports = solution;

// // 7,8,9,10 시간초과
// function solution(r1, r2) {
//   let count = 0;
//   let min = r1 ** 2;
//   let max = r2 ** 2;

//   for (let x = 1; x < r2; x++) {
//     for (let y = 0; y < r2; y++) {
//       let dot = x ** 2 + y ** 2;
//       if (min <= dot && dot <= max) {
//         count++;
//       }
//     }
//   }

//   return count * 4 + 4;
// }
