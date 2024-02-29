const solution = require("../../programmers/12981");

describe("영어 끝말잇기", () => {
  test("#1", () => {
    expect(
      solution(3, [
        "tank",
        "kick",
        "know",
        "wheel",
        "land",
        "dream",
        "mother",
        "robot",
        "tank",
      ])
    ).toEqual(expect.arrayContaining([3, 3]));
  });

  test("#2", () => {
    expect(
      solution(5, [
        "hello",
        "observe",
        "effect",
        "take",
        "either",
        "recognize",
        "encourage",
        "ensure",
        "establish",
        "hang",
        "gather",
        "refer",
        "reference",
        "estimate",
        "executive",
      ])
    ).toEqual(expect.arrayContaining([0, 0]));
  });

  test("#3", () => {
    expect(
      solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
    ).toEqual(expect.arrayContaining([1, 3]));
  });
});
