const solution = require("../../leetcode/621");

describe("Task Scheduler", () => {
  test("#1", () => {
    expect(solution(["A", "A", "A", "B", "B", "B"], 2)).toEqual(8);
  });
  test("#2", () => {
    expect(solution(["A", "C", "A", "B", "D", "B"], 1)).toEqual(6);
  });
  test("#3", () => {
    expect(solution(["A", "A", "A", "B", "B", "B"], 3)).toEqual(10);
  });
  test("#4 반례 ", () => {
    expect(solution(["A", "C", "A", "B", "D", "B"], 4)).toEqual(7);
    // A B C D - A B
  });
  test("#5 반례 ", () => {
    expect(
      solution(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 1)
    ).toEqual(12);
  });
  test("#6 반례 ", () => {
    expect(solution(["A", "A", "A"], 1)).toEqual(5);
  });
});
