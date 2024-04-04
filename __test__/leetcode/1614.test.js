const solution = require("../../leetcode/1614");

describe("Maximum Nesting Depth of the Parentheses", () => {
  test("#1", () => {
    expect(solution("(1)+((2))+(((3)))")).toEqual(3);
  });
  test("#2", () => {
    expect(solution("(1+(2*3)+((8)/4))+1")).toEqual(3);
  });
  test("#3 - 반례", () => {
    expect(solution("+(+(+)+)+")).toEqual(2);
  });
  test("#4 - 반례", () => {
    expect(solution("()")).toEqual(1);
  });
});
