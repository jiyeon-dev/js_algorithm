/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/133502
 * 빵 - 야채 - 고기 - 빵 ( 1 - 2 - 3 - 1 )
 *
 * 새로운 배열을 만들지 않는 방식으로 해결
 */
function solution(ingredient) {
  var answer = 0;
  let stack = [];

  ingredient.forEach((item) => {
    stack.push(item);
    if (stack.slice(-4).join("") === "1231") {
      answer += 1;
      stack.splice(-4);
    }
  });

  return answer;
}
// // 3 ~ 9, 12 시간 초과
// function solution(ingredient) {
//   var answer = 0;

//   let stack = [];
//   ingredient.forEach((item, index) => {
//     stack.push(item);
//     const start = stack.length - 4 < 0 ? 0 : stack.length - 4;
//     const lastStack = stack.slice(start, stack.length);
//     if (lastStack.join("") === [1, 2, 3, 1].join("")) {
//       answer += 1;
//       stack = stack.splice(0, start);
//     }
//   });
//   return answer;
// }

module.exports = solution;

solution([2, 1, 1, 2, 3, 1, 2, 3, 1]);
