const solution = require("../../leetcode/2375");

describe("Construct Smallest Number From DI String", () => {
  test("#1", () => {
    expect(solution("IIIDIDDD")).toEqual("123549876");
  });
  test("#2", () => {
    expect(solution("DDD")).toEqual("4321");
  });
});
