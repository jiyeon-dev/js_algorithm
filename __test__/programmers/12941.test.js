const solution = require("../../programmers/12941");

describe("최솟값 만들기", () => {
  test("#1", () => {
    expect(solution([1, 4, 2], [5, 4, 4])).toEqual(29);
  });
  test("#2", () => {
    expect(solution([1, 2], [3, 4])).toEqual(10);
  });
});
