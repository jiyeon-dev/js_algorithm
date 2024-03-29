const solution = require("../../programmers/68645");

describe("삼각 달팽이", () => {
  test("#1", () => {
    expect(solution(4)).toEqual(
      expect.arrayContaining([1, 2, 9, 3, 10, 8, 4, 5, 6, 7])
    );
  });
  test("#2", () => {
    expect(solution(5)).toEqual(
      expect.arrayContaining([
        1, 2, 12, 3, 13, 11, 4, 14, 15, 10, 5, 6, 7, 8, 9,
      ])
    );
  });
  test("#3", () => {
    expect(solution(6)).toEqual(
      expect.arrayContaining([
        1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10,
        11,
      ])
    );
  });
});
