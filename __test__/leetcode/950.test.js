const solution = require("../../leetcode/950");

describe("Reveal Cards In Increasing Order", () => {
  test("#1", () => {
    expect(solution([17, 13, 11, 2, 3, 5, 7])).toEqual(
      expect.arrayContaining([2, 13, 3, 11, 5, 17, 7])
    );
  });
  test("#2", () => {
    expect(solution([1, 1000])).toEqual(expect.arrayContaining([1, 1000]));
  });
});
