const solution = require("../../leetcode/38");

describe("Count and Say", () => {
  test("#1", () => {
    expect(solution(1)).toEqual("1");
  });
  test("#2", () => {
    expect(solution(4)).toEqual("1211");
  });
});
