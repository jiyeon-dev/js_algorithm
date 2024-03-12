const solution = require("../../programmers/133502");

describe("햄버거 만들기", () => {
  test("#1", () => {
    expect(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])).toEqual(2);
  });

  test("#2", () => {
    expect(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])).toEqual(0);
  });
});
