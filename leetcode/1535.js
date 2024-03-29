/**
 * https://leetcode.com/problems/find-the-winner-of-an-array-game/description
 */
var getWinner = function (arr, k) {
  // 전체 길이 보다 커지면 무조건 가장 큰 수가 우승자가 됨.
  if (k >= arr.length) {
    return Math.max(...arr);
  }

  let winner = {};
  let i = 0,
    j = 1;

  while (j < arr.length) {
    let num1 = arr[i];
    let num2 = arr[j];

    let win = Math.max(num1, num2);
    winner[win] = winner[win] ? winner[win] + 1 : 1;

    if (winner[win] === k) return win;
    if (num2 > num1) i = j;
    j++;
  }
  return arr[i];
};

module.exports = getWinner;

// // 좀더 나은 방법 - 굳이 객체에 저장 안해도 됨.
// var getWinner = function (arr, k) {
//   if (k >= arr.length) {
//     return Math.max(...arr);
//   }

//   let winner = arr[0];
//   let count = 0;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < winner) {
//       count++;
//     } else {
//       count = 1;
//       winner = arr[i];
//     }

//     if (count === k) {
//       return winner;
//     }
//   }

//   return winner;
// };
