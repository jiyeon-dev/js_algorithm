const solution = require("../../programmers/161990");

describe("바탕화면 정리", () => {
  test("#1", () => {
    expect(solution([".#...", "..#..", "...#."])).toEqual(
      expect.arrayContaining([0, 1, 3, 4])
    );
  });
  test("#2", () => {
    expect(
      solution([
        "..........",
        ".....#....",
        "......##..",
        "...##.....",
        "....#.....",
      ])
    ).toEqual(expect.arrayContaining([1, 3, 5, 8]));
  });
  test("#3", () => {
    expect(
      solution([
        ".##...##.",
        "#..#.#..#",
        "#...#...#",
        ".#.....#.",
        "..#...#..",
        "...#.#...",
        "....#....",
      ])
    ).toEqual(expect.arrayContaining([0, 0, 7, 9]));
  });
  test("#4", () => {
    expect(solution(["..", "#."])).toEqual(
      expect.arrayContaining([1, 0, 2, 1])
    );
  });

  test("#5 반례 - 파일이 아예 없는 경우", () => {
    expect(solution(["..", ".."])).toEqual(
      expect.arrayContaining([0, 0, 0, 0])
    );
  });
});
