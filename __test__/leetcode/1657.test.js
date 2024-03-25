const solution = require("../../leetcode/1657");

describe("Determine if Two Strings Are Close", () => {
  test("#1", () => {
    expect(solution("abc", "bca")).toEqual(true);
  });
  test("#2", () => {
    expect(solution("a", "aa")).toEqual(false);
  });
  test("#3", () => {
    expect(solution("cabbba", "abbccc")).toEqual(true);
  });
});
