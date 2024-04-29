const solution = require("../../leetcode/79");

describe("Word Search", () => {
  test("#1", () => {
    expect(
      solution(
        [
          ["A", "B", "C", "E"],
          ["S", "F", "C", "S"],
          ["A", "D", "E", "E"],
        ],
        "ABCCED"
      )
    ).toEqual(true);
  });
  test("#2", () => {
    expect(
      solution(
        [
          ["A", "B", "C", "E"],
          ["S", "F", "C", "S"],
          ["A", "D", "E", "E"],
        ],
        "SEE"
      )
    ).toEqual(true);
  });
  test("#3", () => {
    expect(
      solution(
        [
          ["A", "B", "C", "E"],
          ["S", "F", "C", "S"],
          ["A", "D", "E", "E"],
        ],
        "ABCB"
      )
    ).toEqual(false);
  });
});
