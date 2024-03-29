/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/68645
 *
 * 아래와 같은 형태로 입력하도록 해서 해결함. 
 * [
    [1, 0, 0, 0, 0, 0],
    [2, 15, 0, 0, 0, 0],
    [3, 16, 14, 0, 0, 0],
    [4, 17, 21, 13, 0, 0],
    [5, 18, 19, 20, 12, 0],
    [6, 7, 8, 9, 10, 11],
  ];
 */
function solution(n) {
  const matrix = Array.from(Array(n), () => Array(n).fill(0));

  let num = 1;
  let x = 0;
  let y = 0;
  let pos = "down"; // down -> right -> up

  // 입력 가능한 마지막 숫자
  let lastNum = Array.from({ length: n }, (_, i) => i + 1).reduce(
    (acc, curr) => acc + curr,
    0
  );

  while (true) {
    matrix[y][x] = num;

    // 좌표 이동
    if (pos === "down") {
      y += 1;
    } else if (pos === "right") {
      x += 1;
    } else if (pos === "up") {
      y -= 1;
      x -= 1;
    }

    if (pos === "down" && (y >= n || matrix[y][x] !== 0)) {
      pos = "right";
      y -= 1;
      x += 1;
    } else if (pos === "right" && (x >= n || matrix[y][x] !== 0)) {
      pos = "up";
      y -= 1;
      x -= 2;
    } else if (pos === "up" && matrix[y][x] !== 0) {
      pos = "down";
      y += 2;
      x += 1;
    }

    if (num === lastNum) break;
    num++;
  }

  // 일차 배열로 변경
  const result = matrix.map((arr) => arr.filter((item) => item !== 0));
  return result.flat();
}

module.exports = solution;
