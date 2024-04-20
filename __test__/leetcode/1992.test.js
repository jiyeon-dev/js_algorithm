const solution = require("../../leetcode/1992");

describe("Find All Groups of Farmland", () => {
  test("#1", () => {
    expect(
      solution([
        [1, 0, 0],
        [0, 1, 1],
        [0, 1, 1],
      ])
    ).toEqual(
      expect.arrayContaining([
        [0, 0, 0, 0],
        [1, 1, 2, 2],
      ])
    );
  });
  test("#2", () => {
    expect(
      solution([
        [1, 1],
        [1, 1],
      ])
    ).toEqual([[0, 0, 1, 1]]);
  });
  test("#3", () => {
    expect(solution([[0]])).toEqual([]);
  });
});
