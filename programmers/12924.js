/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12924
 */
function solution(n) {
  let answer = 1; // n = n 인 경우는 무조건 존재하므로 1부터 시작

  // 재귀 함수로 연속된 수 누적 합 검사
  function recursive(m, sum) {
    if (sum >= n) return 0;
    sum = sum + m;
    return m + recursive(m + 1, sum);
  }

  // 어쩌피 절반 이상으로 가면 연속 수가 될 수 없으므로 절반까지만 검사
  for (let i = 1; i < n / 2; i++) {
    if (n === recursive(i, 0)) answer++;
  }

  return answer;
}

module.exports = solution;

// // 효율성 1~4 실패
// function solution(n) {
//   let answer = 0;

//   function recursive(m, sum) {
//     if (sum >= n) return 0;
//     sum = sum + m;
//     return m + recursive(m + 1, sum);
//   }

//   for (let i = 1; i <= n; i++) {
//     if (n === recursive(i, 0)) answer++;
//   }

//   return answer;
// }
