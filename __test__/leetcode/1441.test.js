const solution = require("../../leetcode/1441");

describe("Build an Array With Stack Operations", () => {
  test("#1", () => {
    expect(solution([1, 3], 3)).toEqual(
      expect.arrayContaining(["Push", "Push", "Pop", "Push"])
    );
  });
  test("#2", () => {
    expect(solution([1, 2, 3], 3)).toEqual(
      expect.arrayContaining(["Push", "Push", "Push"])
    );
  });
  test("#3", () => {
    expect(solution([1, 2], 4)).toEqual(
      expect.arrayContaining(["Push", "Push"])
    );
  });
});
