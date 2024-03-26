const solution = require("../../leetcode/442");

describe("Find All Duplicates in an Array", () => {
  test("#1", () => {
    expect(solution([4, 3, 2, 7, 8, 2, 3, 1])).toEqual(
      expect.arrayContaining([2, 3])
    );
  });
  test("#2", () => {
    expect(solution([1, 1, 2])).toEqual(expect.arrayContaining([1]));
  });
  test("#3 반례 - 시작이 일치하지 않음", () => {
    expect(solution([1])).toEqual(expect.arrayContaining([]));
  });
});
