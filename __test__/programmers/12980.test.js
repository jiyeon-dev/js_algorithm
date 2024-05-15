const solution = require("../../programmers/12980");

describe("점프와 순간 이동", () => {
  test("#1", () => {
    expect(solution(5)).toEqual(2);
  });
  test("#2", () => {
    expect(solution(6)).toEqual(2);
  });
  test("#3", () => {
    expect(solution(5000)).toEqual(5);
  });
});
