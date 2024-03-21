/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/17682
 *
 * - 점수는 0 ~ 10 정수
 * - 보너스
 *   - S : 1제곱
 *   - D : 2제곱
 *   - T : 3제곱
 * - 옵션 ( 없을 수도 있음, 중첩 가능 )
 *   - * (스타상): 현재 점수 * 2 & 바로 전에 얻은 점수 * 2, 첫번째부터 스타상인 경우 첫번째 점수 * 2, 중첩 가능 → 예제 4
 *   - # (아차상): 해당 점수 * -1 → 예제 5
 */
function solution(dartResult) {
  const gradeArr = [];
  const nums = dartResult.split(/[^0-9]/).filter(Boolean); // 숫자만 추출
  const strs = dartResult.split(/[0-9]/).filter(Boolean); // 문자만 추출

  nums.forEach((num, i) => {
    const [bonus, option] = strs[i].split("");
    const square = bonus === "T" ? 3 : bonus === "D" ? 2 : 1; // 보너스 체크
    const multi = option === "#" ? -1 : 1; // 옵션 체크

    let cur = (+num) ** square * multi; // 현재 점수

    // 스타상인 경우 점수*2
    if (option === "*") {
      cur = cur * 2;
      const prev = gradeArr.pop();
      if (prev) gradeArr.push(prev * 2); // 이전 점수 *2
    }
    gradeArr.push(cur);
  });

  return gradeArr.reduce((acc, cur) => acc + cur, 0);
}

module.exports = solution;
