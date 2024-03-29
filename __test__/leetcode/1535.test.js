const solution = require("../../leetcode/1535");

describe("Find the Winner of an Array Game", () => {
  test("#1", () => {
    expect(solution([2, 1, 3, 5, 4, 6, 7], 2)).toEqual(5);
  });
  test("#2", () => {
    expect(solution([3, 2, 1], 10)).toEqual(3);
  });
  test("#3 반례 - 숫자가 큰 경우 (메모리 초과)", () => {
    expect(
      solution([1, 11, 22, 33, 44, 55, 66, 77, 88, 99], 1000000000)
    ).toEqual(99);
  });
});
