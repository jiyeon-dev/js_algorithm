const solution = require("../../programmers/131128");

describe("숫자 짝꿍", () => {
  test("#1", () => {
    expect(solution("100", "2345")).toEqual("-1");
  });
  test("#2", () => {
    expect(solution("100", "203045")).toEqual("0");
  });
  test("#3", () => {
    expect(solution("100", "123450")).toEqual("10");
  });
  test("#4", () => {
    expect(solution("12321", "42531")).toEqual("321");
  });
  test("#5", () => {
    expect(solution("5525", "1255")).toEqual("552");
  });
});
