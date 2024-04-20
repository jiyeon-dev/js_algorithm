const solution = require("../../programmers/181188");

describe("요격 시스템", () => {
  test("#1", () => {
    expect(
      solution([
        [4, 5],
        [4, 8],
        [10, 14],
        [11, 13],
        [5, 12],
        [3, 7],
        [1, 4],
      ])
    ).toEqual(3);
  });
});
