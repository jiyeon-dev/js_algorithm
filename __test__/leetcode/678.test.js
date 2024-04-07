const solution = require("../../leetcode/678");

describe("Valid Parenthesis String", () => {
  test("#1", () => {
    expect(solution("()")).toEqual(true);
  });
  test("#2", () => {
    expect(solution("(*)")).toEqual(true);
  });
  test("#3", () => {
    expect(solution("(*))")).toEqual(true);
  });
  test("#4 추가 예제", () => {
    expect(
      solution(
        "(((((*(()(((*((**((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"
      )
    ).toEqual(false);
  });
});
