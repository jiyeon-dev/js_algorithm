const solution = require("../../programmers/250137");

describe("[PCCP 기출문제] 1번/붕대 감기", () => {
  test("#1", () => {
    expect(
      solution([5, 1, 5], 30, [
        [2, 10],
        [9, 15],
        [10, 5],
        [11, 5],
      ])
    ).toBe(5);
  });

  test("#2", () => {
    expect(
      solution([3, 2, 7], 20, [
        [1, 15],
        [5, 16],
        [8, 6],
      ])
    ).toBe(-1);
  });

  test("#3", () => {
    expect(
      solution([4, 2, 7], 20, [
        [1, 15],
        [5, 16],
        [8, 6],
      ])
    ).toBe(-1);
  });

  test("#4", () => {
    expect(
      solution([1, 1, 1], 5, [
        [1, 2],
        [3, 2],
      ])
    ).toBe(3);
  });
});
