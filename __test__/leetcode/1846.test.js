const solution = require("../../leetcode/1846");

describe("Maximum Element After Decreasing and Rearranging", () => {
  test("#1", () => {
    expect(solution([2, 2, 1, 2, 1])).toEqual(2);
  });
  test("#2", () => {
    expect(solution([100, 1, 1000])).toEqual(3);
  });
  test("#3", () => {
    expect(solution([1, 2, 3, 4, 5])).toEqual(5);
  });
  test("#4 - 반례 : 1개만 있는 경우", () => {
    expect(solution([73])).toEqual(1);
  });
  test("#5 - 반례 : 최소값이 1로 시작하지 않는 경우", () => {
    expect(solution([73, 98, 9])).toEqual(3);
  });
});
