const solution = require("../../programmers/42840");

describe("모의고사", () => {
  test("#1", () => {
    expect(solution([1, 2, 3, 4, 5])).toEqual(expect.arrayContaining([1]));
  });
  test("#2", () => {
    expect(solution([1, 3, 2, 4, 2])).toEqual(
      expect.arrayContaining([1, 2, 3])
    );
  });
  test("#3 - 반례", () => {
    expect(solution([5, 5, 5, 5, 5, 5, 5, 5, 5, 5])).toEqual(
      expect.arrayContaining([1, 3])
    );
  });
});
