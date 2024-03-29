/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/169198
 */
function solution(m, n, startX, startY, balls) {
  return balls.map(([x, y]) => {
    let a = 0,
      b = 0;
    // if (startY === y) {
    //   a = Math.abs(startX - x);
    //   b = Math.abs(n - startY) * 2;
    //   console.log(a, b);
    // }
    // } else if (startX === x) {
    //   a = Math.abs(m - startX) * 2;
    //   b = Math.abs(startY - y);
    // } else if (startX === y && startY === x) {
    //   a = Math.abs(startX - n) + Math.abs(x - n);
    //   b = Math.abs(startY - y);
    // } else {
    vA = Math.abs(startX - x);
    vB = Math.abs(n - startY) + Math.abs(n - y);
    hA = Math.abs(m - startX) + Math.abs(m - x);
    hB = Math.abs(startY - y);

    console.log(Math.min(vA ** 2 + vB ** 2, hA ** 2 + hB ** 2));

    return Math.min(vA ** 2 + vB ** 2, hA ** 2 + hB ** 2);
  });
}

module.exports = solution;

solution(10, 10, 3, 7, [
  [7, 7],
  [2, 7],
  [7, 3],
  [3, 7],
]); // [52. 37. 116]
