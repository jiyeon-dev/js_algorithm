const solution = require("../../leetcode/1921");

describe("Eliminate Maximum Number of Monsters", () => {
  test("#1", () => {
    expect(solution([1, 3, 4], [1, 1, 1])).toEqual(3);
  });
  test("#2", () => {
    expect(solution([1, 1, 2, 3], [1, 1, 1, 1])).toEqual(1);
  });
  test("#3", () => {
    expect(solution([3, 2, 4], [5, 3, 2])).toEqual(1);
  });
  test("#4 - 추가 테스트", () => {
    expect(solution([3, 5, 7, 4, 5], [2, 3, 6, 3, 2])).toEqual(2);
  });
  test("#5 - 추가 테스트", () => {
    expect(solution([4, 3, 4], [1, 1, 2])).toEqual(3);
  });
});
