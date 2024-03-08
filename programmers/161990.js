/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/161990?language=javascript
 *
 * 주의) 프로그래머스에서 findLastIndex는 지원 안함.
 */
function solution(wallpaper) {
  const answer = [-1, -1, -1, -1]; // 첫 행부터 파일이 없을 수 있기 때문에 -1 로 초기화

  wallpaper.map((cols, rowIndex) => {
    const colsArr = cols.split("");
    const start = colsArr.indexOf("#");
    const end = colsArr.lastIndexOf("#");

    // 드래그 시작
    if (start > -1 && answer[1] === -1) {
      // 첫 파일인 경우
      answer[0] = rowIndex;
      answer[1] = start;
    } else if (start > -1 && answer[1] > start) answer[1] = start; // 이전 행보다 더 앞에 파일이 존재하는 경우

    // 드래그 끝
    if (end > -1 && (answer[3] === -1 || answer[3] <= end + 1)) {
      // 이전 행보다 더 뒤에 파일이 존재하는 경우 + 1;
      answer[2] = rowIndex + 1;
      answer[3] = end + 1;
    } else if (end > -1) answer[2] = rowIndex + 1; // 행에 파일이 있으면 무조건 + 1
  });

  return answer.map((item) => (item === -1 ? 0 : item));
}

module.exports = solution;

// 다른 사람 풀이 - 최소/최대 값으로 해결 🧐
// function solution(wallpaper) {
//   let [x1, y1, x2, y2] = [wallpaper.length, wallpaper[0].length, 0, 0];
//   wallpaper.forEach((paper, i) => {
//     if (paper.includes("#")) {
//       x1 = Math.min(x1, i);
//       y1 = Math.min(y1, paper.indexOf("#"));
//       x2 = Math.max(x2, i);
//       y2 = Math.max(y2, paper.lastIndexOf("#"));
//     }
//   });
//   return [x1, y1, x2 + 1, y2 + 1];
// }
