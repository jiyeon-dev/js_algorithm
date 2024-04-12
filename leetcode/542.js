/**
 * https://leetcode.com/problems/01-matrix/description/
 *
 * 1에서 가장 가까운 0까지의 거리 계산
 * ** 찾은 0을 기준으로 검색하자!
 */
var updateMatrix = function (mat) {
  let m = mat.length,
    n = mat[0].length;
  let res = new Array(m).fill(-1).map(() => new Array(n).fill(-1));

  // 0 이 있는 위치 찾기
  const zeros = [];
  mat.forEach((row, i) => {
    row.forEach((col, j) => {
      if (col === 0) {
        res[i][j] = 0;
        zeros.push([i, j]);
      }
    });
  });

  // 찾은 zero 위치를 기준으로 반복문 돌리면서 전체 검색
  let direction = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ];
  while (zeros.length) {
    let [x, y] = zeros.shift();
    for (let d of direction) {
      let i = x + d[0],
        j = y + d[1];
      if (i < 0 || i >= m || j < 0 || j >= n) continue; // 넘어가는 경우 무시
      if (res[i][j] != -1) continue; // 1이 아닌 경우 무시
      res[i][j] = res[x][y] + 1;
      zeros.push([i, j]); // 좌표 추가
    }
  }

  return res;
};

module.exports = updateMatrix;

// // 시도 1 ) Time Limit Exceeded
// var updateMatrix = function (mat) {
//   mat.forEach((row, i) => {
//     row.forEach((col, j) => {
//       if (col > 0) {
//         let check = Infinity;
//         for (let count = 1; count < check; count++) {
//           let minX = j - count < 0 ? 0 : j - count;
//           let maxX = j + count >= row.length ? row.length - 1 : j + count;
//           let minY = i - count < 0 ? 0 : i - count;
//           let maxY = i + count >= mat.length ? mat.length - 1 : i + count;
//           for (let y = minY; y <= maxY; y++) {
//             for (let x = minX; x <= maxX; x++) {
//               if (mat[y][x] === 0) {
//                 check = Math.min(Math.abs(i - y) + Math.abs(j - x), check);
//               }
//             }
//           }
//         }
//         if (i === 9 && j === 0) console.log(check);
//         mat[i][j] = check;
//       }
//     });
//   });
//
//   return mat;
// };

// // 시도 2) Testcases passed, but took too long.
// var updateMatrix = function (mat) {
//   // 0 이 있는 위치 찾아서
//   const zeros = [];
//   mat.forEach((row, i) => {
//     row.forEach((col, j) => {
//       if (col === 0) zeros.push([i, j]);
//     });
//   });
//   // 메트릭스 전체를 반복문 돌면서 가장 가까운 0 찾기
//   mat.forEach((row, i) => {
//     row.forEach((col, j) => {
//       if (col === 1) {
//         let distance = Infinity;
//         zeros.forEach(([r, c]) => {
//           distance = Math.min(distance, Math.abs(i - r) + Math.abs(j - c));
//         });
//         mat[i][j] = distance;
//       }
//     });
//   });

//   return mat;
// };
