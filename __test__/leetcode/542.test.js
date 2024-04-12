const solution = require("../../leetcode/542");

describe("01 Matrix", () => {
  test("#1", () => {
    expect(
      solution([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ])
    ).toEqual(
      expect.arrayContaining([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ])
    );
  });
  test("#2", () => {
    expect(
      solution([
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 1],
      ])
    ).toEqual(
      expect.arrayContaining([
        [0, 0, 0],
        [0, 1, 0],
        [1, 2, 1],
      ])
    );
  });
});
