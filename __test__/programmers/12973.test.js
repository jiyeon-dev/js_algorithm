const solution = require("../../programmers/12973");

describe("2017 팁스타운 - 짝지어 제거하기", () => {
  test("#1", () => {
    expect(solution("baabaa")).toEqual(1);
  });
  test("#2", () => {
    expect(solution("cdcd")).toEqual(0);
  });
});
