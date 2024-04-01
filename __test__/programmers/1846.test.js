const solution = require("../../programmers/1846");

describe("포켓몬", () => {
  test("#1", () => {
    expect(solution([3, 1, 2, 3])).toEqual(2);
  });
  test("#2", () => {
    expect(solution([3, 3, 3, 2, 2, 4])).toEqual(3);
  });
  test("#3 - 반례", () => {
    expect(solution([3, 3, 3, 2, 2, 2])).toEqual(2);
  });
});
