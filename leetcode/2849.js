/**
 * https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/description/
 *
 * **정확히** t 초 후에 (fx, fy)에 도달할 수 있는지 체크하는 문제
 * 최소 도달 거리를 측정 한 후 그보다 작은 경우 false 반환
 */
var isReachableAtTime = function (sx, sy, fx, fy, t) {
  const x = Math.abs(sx - fx);
  const y = Math.abs(sy - fy);

  // 시작과 종료 지점이 같은 경우 t가 0이거나 1보다 커야됨.
  if (sx == fx && sy == fy && t === 1) return false;
  return x <= t && y <= t;
};

module.exports = isReachableAtTime;
