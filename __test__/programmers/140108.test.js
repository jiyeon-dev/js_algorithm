const solution = require("../../programmers/140108");

describe("문자열 나누기", () => {
  test("#1", () => {
    expect(solution("banana")).toEqual(3);
  });
  test("#2", () => {
    expect(solution("abracadabra")).toEqual(6);
  });
  test("#3", () => {
    expect(solution("aaabbaccccabba")).toEqual(3);
  });
});
