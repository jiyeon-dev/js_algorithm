/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/172928
 *
 * 테스트 케이스 #4
 * `park[newX][newY] === "X"`의 경우 newX와 newY 가 이미 범위를 벗어났을 수도 있으니 조건문에서 가장 마지막에 위치해야함. (런타임오류 발생)
 */
function solution(park, routes) {
  let paths = [];
  const max_x = park.length - 1;
  const max_y = park[0].length - 1;

  // 시작점 확인
  for (let i = 0; i <= max_x; i++) {
    for (let j = 0; j <= max_y; j++) {
      if (park[i][j] === "S") {
        paths = [i, j];
        break;
      }
    }
    if (paths.length > 0) break;
  }

  routes.map((route) => {
    let [direction, count] = route.split(" ");
    let [newX, newY] = paths;
    let isSkip = false;

    for (let i = 0; i < Number(count); i++) {
      if (direction === "E") {
        newY = newY + 1;
      } else if (direction === "W") {
        newY = newY - 1;
      } else if (direction === "S") {
        newX = newX + 1;
      } else if (direction === "N") {
        newX = newX - 1;
      }

      if (
        newX > max_x ||
        newY > max_y ||
        newX < 0 ||
        newY < 0 ||
        park[newX][newY] === "X"
      ) {
        isSkip = true;
        break;
      }
    }

    // 범위 안에 포함된 경우 추가
    if (!isSkip) {
      paths = [newX, newY];
    }
  });

  return paths;
}

module.exports = solution;
