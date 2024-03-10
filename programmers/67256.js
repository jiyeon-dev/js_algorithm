/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/67256
 * 1 2 3
 * 4 5 6
 * 7 8 9
 * * 0 #
 */
function solution(numbers, hand) {
  const keypad = [
    [1, 4, 7, "*"],
    [2, 5, 8, 0],
    [3, 6, 9, "#"],
  ];
  let answer = "";
  let left = "*";
  let right = "#";

  for (let num of numbers) {
    if (keypad[0].includes(num)) {
      answer += "L";
      left = num;
    } else if (keypad[2].includes(num)) {
      answer += "R";
      right = num;
    } else {
      const [numX, numY] = [1, keypad[1].indexOf(num)]; // 숫자 좌표

      // left, right 좌표
      let leftX,
        leftY,
        rightX,
        rightY = 0;
      keypad.forEach((cols, index) => {
        if (cols.indexOf(left) > -1) {
          leftX = index;
          leftY = cols.indexOf(left);
        }
        if (cols.indexOf(right) > -1) {
          rightX = index;
          rightY = cols.indexOf(right);
        }
      });

      const fromLeftToNum = Math.abs(leftX - numX) + Math.abs(leftY - numY);
      const fromRightToNum = Math.abs(rightX - numX) + Math.abs(rightY - numY);

      if (
        fromLeftToNum > fromRightToNum ||
        (fromLeftToNum === fromRightToNum && hand === "right")
      ) {
        right = num;
        answer += "R";
      } else {
        left = num;
        answer += "L";
      }
    }
  }

  return answer;
}

module.exports = solution;
