/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/135808
 */
function solution(k, m, score) {
  const arr = score.sort().slice(score.length % m);
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i = i + m) {
    sum += arr[i] * m;
  }
  return sum;
}

module.exports = solution;
solution(3, 4, [1, 2, 3, 1, 2, 3, 1]);
solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]);

// // 좀더 빠른 방법
// function solution(k, m, score) {
//   const obj = {};
//   score.forEach((apple) => {
//     if (obj[apple]) obj[apple] = obj[apple] + 1;
//     else obj[apple] = 1;
//   });

//   let total = score.length - (score.length % m); // 분배 가능한 전체 사과 수
//   let sum = 0,
//     left = 0;
//   for (let i = k; 0 < i; i--) {
//     if (obj[i]) {
//       let count = total - obj[i] < 0 ? total : obj[i];
//       const _box = Math.floor((count + left) / m);
//       sum += _box * i * m;
//       total = total - count;
//       left = (count + left) % m;
//     }
//     if (!total) break;
//   }
//   return sum;
// }
