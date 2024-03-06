/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/150370
 *
 * 17 번 반례 찾느라 30분 걸림 🥲 ( 테스트 코드 반례 #6 )
 * => m % 12 에서 0 일수도 있다는 조건을 깜빡함.
 * => m < 1 과 m > 12 조건문 위치를 바꿔서 통과함.
 */
function solution(today, terms, privacies) {
  const answer = [];

  // 약관 종류를 객체에 담음
  const termsObj = {};
  terms.map((term) => {
    const [kind, month] = term.split(" ");
    termsObj[kind] = +month;
  });

  // 오늘 날짜
  const [y0, m0, d0] = today.split(".").map((item) => +item);

  // 약관 조회
  privacies.forEach((privacies, index) => {
    const [createDate, kind] = privacies.split(" ");
    const [y1, m1, d1] = calculate(createDate, termsObj[kind]);

    // 이미 날짜가 지난경우
    if (
      y0 > y1 ||
      (y0 === y1 && m0 > m1) ||
      (y0 === y1 && m0 === m1 && d0 > d1)
    ) {
      answer.push(index + 1);
    }
  });
  return answer;
}

const calculate = (date, month) => {
  const [yyyy, mm, dd] = date.split(".");
  let y = +yyyy;
  let m = +mm + month;
  let d = +dd - 1;

  if (d === 0) {
    m = m - 1;
    d = 28;
  }
  if (m > 12) {
    y = y + parseInt(m / 12);
    m = m % 12;
  }
  if (m < 1) {
    y = y - 1;
    m = 12;
  }

  return [y, m, d];
};

module.exports = solution;
