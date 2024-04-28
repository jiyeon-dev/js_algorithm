const solution = require("../../programmers/12913");

describe("땅따먹기", () => {
  test("#1", () => {
    expect(
      solution([
        [1, 2, 3, 5],
        [5, 6, 7, 8],
        [4, 3, 2, 1],
      ])
    ).toEqual(16);
  });
});
