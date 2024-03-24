const solution = require("../../programmers/161989");

describe("덧칠하기", () => {
  test("#1", () => {
    expect(solution(8, 4, [2, 3, 6])).toEqual(2);
  });
  test("#2", () => {
    expect(solution(5, 4, [1, 3])).toEqual(1);
  });
  test("#3", () => {
    expect(solution(4, 1, [1, 2, 3, 4])).toEqual(4);
  });
});
