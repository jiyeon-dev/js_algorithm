/**
 * https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/description
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[0] - b[0]); // 1. 정렬

  let shots = 1;
  let end = points[0][1]; // 화살 범위 마지막

  points.forEach((point) => {
    if (end < point[0]) {
      // 시작 점이 end보다 뒤에 있는 경우 새로운 화살 추가
      shots++;
      end = point[1];
    } else end = Math.min(end, point[1]);
  });

  return shots;
};

module.exports = findMinArrowShots;
