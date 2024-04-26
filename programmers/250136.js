/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/250136
 *
 * 효율성 5번은 메모리로 인한 런타임 에러 발생이라 함. 정답하고 2)하고 왜 결과가 다른지 모르겠음. 메모리는 같은 것 같은데...
 */
function solution(land) {
  const N = land.length;
  const M = land[0].length;

  const oilArr = new Array(M).fill(0); // 위치별 석유 합 저장

  const visit = (i, j) => {
    let oil = 0;
    const yArr = new Set(); // 석유가 있는 위치 저장
    const stack = [[i, j]];

    while (stack.length) {
      const [x, y] = stack.pop();

      if (land[x][y] === 1) {
        oil++;
        land[x][y] = -1; // 방문 체크
        yArr.add(y);
      }

      // 상하좌우 체크
      if (x + 1 < N && land[x + 1][y] === 1) stack.push([x + 1, y]);
      if (0 <= x - 1 && land[x - 1][y] === 1) stack.push([x - 1, y]);
      if (0 <= y - 1 && land[x][y - 1] === 1) stack.push([x, y - 1]);
      if (y + 1 < M && land[x][y + 1] === 1) stack.push([x, y + 1]);
    }

    yArr.forEach((pos) => {
      oilArr[pos] += oil;
    });
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (land[i][j] === 1) {
        visit(i, j); // 석유 체크
      }
    }
  }

  return Math.max(...oilArr);
}

module.exports = solution;

// // 1) 효율성 5, 6 런타임에러
// function solution(land) {
//   // 석유 양 조회
//   const oilArr = new Array(land[0].length).fill(0);
//   const visited = new Array(land.length)
//     .fill()
//     .map(() => new Array(land[0].length).fill(false));
//   const visit = (land, i, j, visited, arr) => {
//     if (i < 0 || i >= land.length || j < 0 || j >= land[0].length) return 0;
//     if (land[i][j] === 0) return 0;

//     if (land[i][j] === 1 && !visited[i][j]) {
//       visited[i][j] = true;
//       arr[j] = true;

//       // 상하좌우 체크
//       return (
//         1 +
//         visit(land, i + 1, j, visited, arr) +
//         visit(land, i - 1, j, visited, arr) +
//         visit(land, i, j + 1, visited, arr) +
//         visit(land, i, j - 1, visited, arr)
//       );
//     } else return 0;
//   };
//   for (let i = 0; i < land.length; i++) {
//     for (let j = 0; j < land[i].length; j++) {
//       if (land[i][j] === 1 && !visited[i][j]) {
//         const arr = new Array(land[i].length).fill(false);
//         const oil = visit(land, i, j, visited, arr); // 석유 양
//         arr.forEach((val, index) => {
//           if (val) oilArr[index] += oil;
//         });
//       }
//     }
//   }

//   return Math.max(...oilArr);
// }

// // 2) 효율성 5 - 런타임 에러
// function solution(land) {
//   // 석유 양 조회
//   const oilArr = new Array(land[0].length).fill(0);
//   const visit = (land, i, j, arr) => {
//     if (i < 0 || i >= land.length || j < 0 || j >= land[0].length) return 0;
//     if (land[i][j] === 0) return 0;

//     if (land[i][j] === 1) {
//       arr[j] = true;
//       land[i][j] = -1;

//       // 상하좌우 체크
//       return (
//         1 +
//         visit(land, i + 1, j, arr) +
//         visit(land, i - 1, j, arr) +
//         visit(land, i, j + 1, arr) +
//         visit(land, i, j - 1, arr)
//       );
//     } else return 0;
//   };
//   for (let i = 0; i < land.length; i++) {
//     for (let j = 0; j < land[i].length; j++) {
//       if (land[i][j] === 1) {
//         const arr = new Array(land[i].length).fill(false);
//         const oil = visit(land, i, j, arr); // 석유 양

//         arr.forEach((val, index) => {
//           if (val) oilArr[index] += oil;
//         });
//       }
//     }
//   }

//   return Math.max(...oilArr);
// }
