const solution = require("../../leetcode/1249");

describe("Minimum Remove to Make Valid Parentheses", () => {
  test("#1", () => {
    expect(solution("lee(t(c)o)de)")).toEqual("lee(t(c)o)de");
  });
  test("#2", () => {
    expect(solution("a)b(c)d")).toEqual("ab(c)d");
  });
  test("#3", () => {
    expect(solution("))((")).toEqual("");
  });
});
