const solution = require("../../leetcode/6");

describe("Zigzag Conversion", () => {
  test("#1", () => {
    expect(solution("PAYPALISHIRING", 3)).toEqual("PAHNAPLSIIGYIR");
  });
  test("#2", () => {
    expect(solution("PAYPALISHIRING", 4)).toEqual("PINALSIGYAHRPI");
  });
  test("#3", () => {
    expect(solution("A", 1)).toEqual("A");
  });
  test("#4", () => {
    expect(solution("ABCD", 2)).toEqual("ACBD");
  });
});
