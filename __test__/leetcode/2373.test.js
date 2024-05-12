const solution = require("../../leetcode/2373");

describe("Largest Local Values in a Matrix", () => {
  test("#1", () => {
    expect(
      solution([
        [9, 9, 8, 1],
        [5, 6, 2, 6],
        [8, 2, 6, 4],
        [6, 2, 2, 2],
      ])
    ).toEqual(
      expect.arrayContaining([
        [9, 9],
        [8, 6],
      ])
    );
  });
  test("#2", () => {
    expect(
      solution([
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 2, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
      ])
    ).toEqual(
      expect.arrayContaining([
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2],
      ])
    );
  });
});
