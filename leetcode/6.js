/**
 * https://leetcode.com/problems/zigzag-conversion/
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const arr = new Array(numRows).fill().map(() => new Array());

  // 지그재그 순서대로 알파벳 저장
  let x = 0,
    y = 0;
  let reverse = false;
  s.split("").forEach((val, i) => {
    arr[x][y] = val;

    if (x === numRows - 1 || (x === 0 && i >= numRows)) reverse = !reverse;
    x = reverse ? x - 1 : x + 1;
    if (reverse) y += 1;
  });

  return arr.reduce((acc, cur) => (acc += cur.join("")), "");
};

module.exports = convert;
