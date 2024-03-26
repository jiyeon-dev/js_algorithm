/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12921
 *
 * 힌트) 에라토스테네스의 체
 */
function solution(n) {
  let answer = 1; // n은 무조건 2보다 큰 수이고, 2는 무조건 있기 때문 1부터 시작
  const x = Math.ceil(Math.sqrt(n)); // x^2 > n 까지만 tmp에 소수를 저장하면 됨
  let tmp = []; // 소수 저장

  for (let i = 3; i <= n; i = i + 2) {
    if (!tmp.some((val) => i % val === 0)) {
      if (i <= x) tmp.push(i);
      answer++;
    }
  }
  return answer;
}

module.exports = solution;

// 11, 효율성 1~4 시간 초과
// function solution(n) {
//   let answer = 1;
//   let tmp = [];
//   for (let i = 3; i <= n; i++) {
//     if (!tmp.some((val) => i % val === 0)) {
//       tmp.push(i);
//       answer++;
//     }
//   }
//   return answer;
// }
