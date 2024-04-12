const solution = require("../../leetcode/2482");

describe("Difference Between Ones and Zeros in Row and Column", () => {
  test("#1", () => {
    expect(
      solution([
        [0, 1, 1],
        [1, 0, 1],
        [0, 0, 1],
      ])
    ).toEqual(
      expect.arrayContaining([
        [0, 0, 4],
        [0, 0, 4],
        [-2, -2, 2],
      ])
    );
  });
  test("#2", () => {
    expect(
      solution([
        [1, 1, 1],
        [1, 1, 1],
      ])
    ).toEqual(
      expect.arrayContaining([
        [5, 5, 5],
        [5, 5, 5],
      ])
    );
  });
});
