const solution = require("../../programmers/12945");

describe("피보나치 수", () => {
  test("#1", () => {
    expect(solution(3)).toEqual(2);
  });
  test("#2", () => {
    expect(solution(5)).toEqual(5);
  });
  test("#3 - 반례 : 런타임 에러 (최대 값 입력)", () => {
    expect(solution(100000)).toEqual(1168141);
  });
});
