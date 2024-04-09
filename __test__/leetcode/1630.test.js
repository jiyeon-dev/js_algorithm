const solution = require("../../leetcode/1630");

describe("Arithmetic Subarrays", () => {
  test("#1", () => {
    expect(solution([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5])).toEqual(
      expect.arrayContaining([true, false, true])
    );
  });
  test("#2", () => {
    expect(
      solution(
        [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10],
        [0, 1, 6, 4, 8, 7],
        [4, 4, 9, 7, 9, 10]
      )
    ).toEqual(expect.arrayContaining([false, true, false, false, true, true]));
  });
});
