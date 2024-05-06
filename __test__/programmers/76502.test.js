const solution = require("../../programmers/76502");

describe("괄호 회전하기", () => {
  test("#1", () => {
    expect(solution("[](){}")).toEqual(3);
  });
  test("#2", () => {
    expect(solution("}]()[{")).toEqual(2);
  });
  test("#3", () => {
    expect(solution("[)(]")).toEqual(0);
  });
  test("#4", () => {
    expect(solution("}}}")).toEqual(0);
  });
});
