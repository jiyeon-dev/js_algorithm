const solution = require("../../programmers/172928");

describe("공원 산책", () => {
  test("#1", () => {
    expect(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"])).toEqual(
      expect.arrayContaining([2, 1])
    );
  });

  test("#2", () => {
    expect(solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"])).toEqual(
      expect.arrayContaining([0, 1])
    );
  });

  test("#3", () => {
    expect(
      solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"])
    ).toEqual(expect.arrayContaining([0, 0]));
  });

  test("#4", () => {
    expect(solution(["SOOO", "OOOO", "OOOO"], ["E 3", "S 3", "S 2"])).toEqual(
      expect.arrayContaining([2, 3])
    );
  });
});
