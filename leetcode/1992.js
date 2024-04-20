/**
 * https://leetcode.com/problems/find-all-groups-of-farmland/description/
 */
/**
 * @param {number[][]} land 전체 밭
 * @return {number[][]} 밭 [처음 좌표, 마지막 좌표] 리스트
 */
var findFarmland = function (land) {
  const answer = [];
  const visited = new Array(land.length)
    .fill()
    .map(() => new Array(land[0].length).fill(false));

  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land[0].length; j++) {
      // 방문 안한 장소만 확인
      if (land[i][j] === 1 && !visited[i][j]) {
        let farm = { x: i, y: j }; // 가장 마지막 좌표 저장
        visit(land, i, j, visited, farm);
        answer.push([i, j, farm["x"], farm["y"]]);
      }
    }
  }

  function visit(land, i, j, visited, farm) {
    if (i < 0 || i >= land.length || j < 0 || j >= land[0].length) return;
    if (land[i][j] === 0) return;

    if (land[i][j] === 1 && !visited[i][j]) {
      visited[i][j] = true;
      // 마지막 좌표 저장
      farm["x"] = Math.max(farm["x"], i);
      farm["y"] = Math.max(farm["y"], j);

      // 상하좌우 체크
      visit(land, i + 1, j, visited, farm);
      visit(land, i - 1, j, visited, farm);
      visit(land, i, j + 1, visited, farm);
      visit(land, i, j - 1, visited, farm);
    }
  }

  return answer;
};

module.exports = findFarmland;
