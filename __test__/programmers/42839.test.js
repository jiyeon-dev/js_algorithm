const solution = require("../../programmers/42839");

describe("소수 찾기", () => {
  test("#1", () => {
    expect(solution("17")).toEqual(3);
  });

  test("#2", () => {
    expect(solution("011")).toEqual(2);
  });
});
