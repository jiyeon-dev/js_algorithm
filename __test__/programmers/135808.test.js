const solution = require("../../programmers/135808");

describe("과일 장수", () => {
  test("#1", () => {
    expect(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])).toEqual(8);
  });
  test("#2", () => {
    expect(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])).toEqual(33);
  });
});
