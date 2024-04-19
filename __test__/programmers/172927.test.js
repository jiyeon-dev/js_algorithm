const solution = require("../../programmers/172927");

describe("광물 캐기", () => {
  test("#1", () => {
    expect(
      solution(
        [1, 3, 2],
        [
          "diamond",
          "diamond",
          "diamond",
          "iron",
          "iron",
          "diamond",
          "iron",
          "stone",
        ]
      )
    ).toEqual(12);
  });
  test("#2", () => {
    expect(
      solution(
        [0, 1, 1],
        [
          "diamond",
          "diamond",
          "diamond",
          "diamond",
          "diamond",
          "iron",
          "iron",
          "iron",
          "iron",
          "iron",
          "diamond",
        ]
      )
    ).toEqual(50);
  });
});
