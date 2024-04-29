const solution = require("../../leetcode/1578");

describe("Minimum Time to Make Rope Colorful", () => {
  test("#1", () => {
    expect(solution("abaac", [1, 2, 3, 4, 5])).toEqual(3);
  });
  test("#2", () => {
    expect(solution("abc", [1, 2, 3])).toEqual(0);
  });
  test("#3", () => {
    expect(solution("aabaa", [1, 2, 3, 4, 1])).toEqual(2);
  });
  test("#4", () => {
    expect(solution("cddcdcae", [4, 8, 8, 4, 4, 5, 4, 2])).toEqual(8);
  });
});
