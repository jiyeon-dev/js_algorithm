const solution = require("../../programmers/42862");

describe("체육복", () => {
  test("#1", () => {
    expect(solution(5, [2, 4], [1, 3, 5])).toEqual(5);
  });
  test("#2", () => {
    expect(solution(5, [2, 4], [3])).toEqual(4);
  });
  test("#3", () => {
    expect(solution(3, [3], [1])).toEqual(2);
  });
  test("#4 반례 - 두개 갖고왔으나 잃어버린 경우", () => {
    expect(solution(6, [3], [3])).toEqual(6);
  });
});
