const solution = require("../../leetcode/2849");

describe("Determine if a Cell is Reachable at a Given Time", () => {
  test("#1", () => {
    expect(solution(2, 4, 7, 7, 6)).toEqual(true);
  });
  test("#2", () => {
    expect(solution(3, 1, 7, 3, 3)).toEqual(false);
  });
  test("#3 - 반례 - 시작과 종료가 같은 경우", () => {
    expect(solution(1, 1, 1, 1, 1)).toEqual(false);
  });
  test("#4 - 반례", () => {
    expect(solution(1, 1, 1, 2, 1)).toEqual(true);
  });
});
