/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/172927
 *
 * - 8번 : 곡괭이 수 보다 광물수가 많은 경우의 처리가 필요하다.
 *        따라서 정렬을 하기 전에 곡괭이 사용 가능한 광물 그룹만 잘라내야한다.
 */
/**
 * @param {*} picks 곡괭이 수 리스트
 * @param {*} minerals 광물 리스트
 */
function solution(picks, minerals) {
  // 전체 곡괭이 수
  const pickCnt = picks.reduce((acc, cur) => acc + cur, 0);

  // 5개씩 나눠서 광물 계산
  const weightArr = [];
  for (let i = 0; i < minerals.length; i = i + 5) {
    const weight = { diamond: 0, iron: 0, stone: 0 };
    minerals.slice(i, i + 5).forEach((mineral) => {
      weight[mineral] += 1;
    });
    weightArr.push(weight);

    // 곡괭이 사용 가능한 수만큼만 계산
    if (weightArr.length === pickCnt) break;
  }

  // 광물 diamond > iron > stone 순서로 정렬
  weightArr.sort((a, b) => {
    return (
      b["diamond"] - a["diamond"] ||
      b["iron"] - a["iron"] ||
      b["stone"] - a["stone"]
    );
  });

  // 피로도 계산
  let answer = 0;
  while (Math.max(...picks, 0) !== 0 && weightArr.length) {
    const weight = weightArr.shift();
    const pick = picks.findIndex((val) => val > 0);

    Object.entries(weight).forEach(([key, val]) => {
      if (key === "diamond")
        answer += val * (pick === 1 ? 5 : pick === 2 ? 25 : 1);
      else if (key === "iron") answer += val * (pick === 2 ? 5 : 1);
      else if (key === "stone") answer += val * 1;
    });
    picks[pick] -= 1;
  }

  return answer;
}

module.exports = solution;
