const solution = require("../../programmers/77484");

describe("로또의 최고 순위와 최저 순위", () => {
  test("#1", () => {
    expect(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])).toEqual(
      expect.arrayContaining([3, 5])
    );
  });
  test("#2", () => {
    expect(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])).toEqual(
      expect.arrayContaining([1, 6])
    );
  });
  test("#3", () => {
    expect(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])).toEqual(
      expect.arrayContaining([1, 1])
    );
  });
});
