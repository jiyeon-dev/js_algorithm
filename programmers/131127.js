/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/131127
 */
function solution(want, number, discount) {
  let count = 0;

  for (let i = 0; i <= discount.length - 10; i++) {
    const buy = discount.slice(i, i + 10);

    let flag = true;
    for (let j = 0; j < want.length; j++) {
      if (buy.filter((value) => value === want[j]).length !== number[j]) {
        flag = false;
        break;
      }
    }

    if (flag) count += 1;
  }

  return count;
}

module.exports = solution;

// 12 빼고 다 실패
// function solution(want, number, discount) {
//   const map = {};
//   let sum = 0;
//   want.forEach((value, i) => {
//     map[value] = number[i];
//     sum += number[i];
//   });

//   let count = 0;
//   let start = 0,
//     end = sum;
//   discount.slice(start, end + 1).forEach((value, i) => {
//     if (map[value]) map[value] -= 1;
//   });

//   while (end < discount.length) {
//     if (Object.values(map).findIndex((value) => value > 0) === -1) {
//       count++;
//     }

//     if (map[discount[start]]) map[discount[start]] += 1;
//     start += 1;
//     end += 1;
//     if (map[discount[end]]) map[discount[end]] -= 1;
//   }

//   return count;
// }
