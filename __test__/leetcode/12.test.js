const solution = require("../../leetcode/12");

describe("Integer to Roman", () => {
  test("#1", () => {
    expect(solution(3)).toEqual("III");
  });
  test("#2", () => {
    expect(solution(58)).toEqual("LVIII");
  });
  test("#3", () => {
    expect(solution("1994")).toEqual("MCMXCIV");
  });
});
