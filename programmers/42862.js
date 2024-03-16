/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42862
 */
function solution(n, lost, reserve) {
  const check = {};
  for (let i = 1; i <= n; i++) {
    // 두개 갖고 왔으나 도난 맞은 경우
    if (lost.includes(i) && reserve.includes(i)) {
      check[i] = 1;
    }
    // 도난 맞은 경우
    else if (lost.includes(i)) {
      if (check[i - 1] === 2) {
        check[i - 1] = 1;
        check[i] = 1;
      } else check[i] = 0;
    }
    // 두개 갖고 온 경우
    else if (reserve.includes(i)) {
      if (check[i - 1] === 0) {
        check[i - 1] = 1;
        check[i] = 1;
      } else check[i] = 2;
    } else check[i] = 1;
  }

  return Object.values(check).reduce((acc, cur) => {
    return cur > 0 ? acc + 1 : acc;
  }, 0);
}

module.exports = solution;

// // 1,2,3,5,6,7,9,10,24 실패 => 두개 갖고 왔으나 도난맞은 경우를 체크 안함.
// function solution(n, lost, reserve) {
//   var answer = 0;
//   const check = {};
//   for (let i = 1; i <= n; i++) {
//     if (lost.includes(i)) {
//       if (check[i - 1] === 2) {
//         check[i - 1] = 1;
//         check[i] = 1;
//       } else check[i] = 0;
//     } else if (reserve.includes(i)) {
//       if (check[i - 1] === 0) {
//         check[i - 1] = 1;
//         check[i] = 1;
//       } else check[i] = 2;
//     } else check[i] = 1;
//   }

//   answer = Object.values(check).reduce((acc, cur) => {
//     if (cur > 0) return acc + 1;
//     else return acc;
//   }, 0);
//   return answer;
// }
