/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/181188
 */
/**
 * @param {*} targets x좌표 범위 목록
 * @returns 최소 미사일 수
 */
function solution(targets) {
  targets.sort((a, b) => a[0] - b[0]); // x 기준 오름차순 정렬

  let answer = 0;
  let start = 0,
    end = 0;
  targets.forEach((target) => {
    if (
      (start <= target[0] && target[0] < end) ||
      (start < target[1] && target[1] <= end)
    ) {
      // start~end범위에 속하는 경우 겹치는 부분 조절
      start = Math.max(target[0], start);
      end = Math.min(target[1], end);
    } else {
      // 겹치지 않는 경우
      [start, end] = target;
      answer++;
    }
  });

  return answer;
}

module.exports = solution;
