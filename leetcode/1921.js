/**
 * https://leetcode.com/problems/eliminate-maximum-number-of-monsters/description/
 */
var eliminateMaximum = function (dist, speed) {
  let kill = 0;

  // 몬스터가 도시에 언제 도달하는지 저장
  const arr = [];
  for (let i = 0; i < dist.length; i++) {
    arr.push(dist[i] / speed[i]);
  }
  arr.sort((a, b) => a - b); // 가장 먼저 도시에 도달하는 몬스터 순서대로 정렬

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - i <= 0) break;
    else kill++;
  }
  return kill;
};

module.exports = eliminateMaximum;
