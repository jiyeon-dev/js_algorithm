const solution = require("../../programmers/181187");

describe("두 원 사이의 정수 쌍", () => {
  test("#1", () => {
    expect(solution(2, 3)).toEqual(20);
  });
  test("#2", () => {
    expect(solution(2, 6)).toEqual(104);
  });
  test("#3", () => {
    expect(solution(2, 4)).toEqual(40);
  });
  test("#4", () => {
    expect(solution(9, 20)).toEqual(1008);
  });
});
