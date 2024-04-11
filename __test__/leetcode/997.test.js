const solution = require("../../leetcode/997");

describe("Find the Town Judge", () => {
  test("#1", () => {
    expect(solution(2, [[1, 2]])).toEqual(2);
  });
  test("#2", () => {
    expect(
      solution(3, [
        [1, 3],
        [2, 3],
      ])
    ).toEqual(3);
  });
  test("#3", () => {
    expect(
      solution(3, [
        [1, 2],
        [2, 3],
        [3, 1],
      ])
    ).toEqual(-1);
  });
  test("#4 반례", () => {
    expect(solution(1, [])).toEqual(1);
  });
});
