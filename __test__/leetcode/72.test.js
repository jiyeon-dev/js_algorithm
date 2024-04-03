const solution = require("../../leetcode/72");

describe("Set Matrix Zeroes", () => {
  test("#1", () => {
    expect(
      solution([
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
      ])
    ).toEqual(
      expect.arrayContaining([
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1],
      ])
    );
  });
  test("#2", () => {
    expect(
      solution([
        [0, 1, 2, 0],
        [3, 4, 5, 2],
        [1, 3, 1, 5],
      ])
    ).toEqual(
      expect.arrayContaining([
        [0, 0, 0, 0],
        [0, 4, 5, 0],
        [0, 3, 1, 0],
      ])
    );
  });
});
