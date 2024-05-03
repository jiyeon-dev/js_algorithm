const solution = require("../../leetcode/165");

describe("165. Compare Version", () => {
  test("#1", () => {
    expect(solution("1.01", "1.001")).toEqual(0);
  });
  test("#2", () => {
    expect(solution("1.0", "1.0.0")).toEqual(0);
  });
  test("#3", () => {
    expect(solution("0.1", "1.1")).toEqual(-1);
  });
  test("#4 version1이 더 큰 경우", () => {
    expect(solution("1.0.1", "1")).toEqual(1);
  });
});
