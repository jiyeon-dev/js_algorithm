const solution = require("../../programmers/155652");

describe("둘만의 암호", () => {
  test("#1", () => {
    expect(solution("aukks", "wbqd", 5)).toEqual("happy");
  });

  test("#2 반례 - 알파벳 길이 넘어가는 경우", () => {
    expect(solution("aukks", "wbqd", 20)).toEqual("ysiip");
  });
});
