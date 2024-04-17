const solution = require("../../leetcode/2225");

describe("Find Players With Zero or One Losses", () => {
  test("#1", () => {
    expect(
      solution([
        [1, 3],
        [2, 3],
        [3, 6],
        [5, 6],
        [5, 7],
        [4, 5],
        [4, 8],
        [4, 9],
        [10, 4],
        [10, 9],
      ])
    ).toEqual(
      expect.arrayContaining([
        [1, 2, 10],
        [4, 5, 7, 8],
      ])
    );
  });
  test("#2", () => {
    expect(
      solution([
        [2, 3],
        [1, 3],
        [5, 4],
        [6, 4],
      ])
    ).toEqual(expect.arrayContaining([[1, 2, 5, 6], []]));
  });
});
