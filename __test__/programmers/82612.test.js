const solution = require("../../programmers/82612");

describe("부족한 금액 계산하기", () => {
  test("#1", () => {
    expect(solution(3, 20, 4)).toEqual(10);
  });
  test("#2 반례 - 돈이 남는 경우", () => {
    expect(solution(3, 40, 4)).toEqual(0);
  });
});
