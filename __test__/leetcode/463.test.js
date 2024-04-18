const solution = require("../../leetcode/463");

describe("463. Island Perimeter", () => {
  test("#1", () => {
    expect(
      solution([
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0],
      ])
    ).toEqual(16);
  });
  test("#2", () => {
    expect(solution([[1]])).toEqual(4);
  });
  test("#3", () => {
    expect(solution([[1, 0]])).toEqual(4);
  });
  test("#4 추가 예제", () => {
    expect(
      solution([
        [1, 1, 1],
        [1, 0, 1],
      ])
    ).toEqual(12);
  });
  test("#5 추가 예제", () => {
    expect(solution([[1], [0]])).toEqual(4);
  });
});
