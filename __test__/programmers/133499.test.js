const solution = require("../../programmers/133499");

describe("옹알이(2)", () => {
  test("#1", () => {
    expect(solution(["aya", "yee", "u", "maa"])).toEqual(1);
  });
  test("#2", () => {
    expect(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"])).toEqual(2);
  });
});
