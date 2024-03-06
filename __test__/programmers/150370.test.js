const solution = require("../../programmers/150370");

describe("개인정보 수집 유효기간", () => {
  test("#1", () => {
    expect(
      solution(
        "2022.05.19",
        ["A 6", "B 12", "C 3"],
        ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
      )
    ).toEqual(expect.arrayContaining([1, 3]));
  });

  test("#2", () => {
    expect(
      solution(
        "2020.01.01",
        ["Z 3", "D 5"],
        [
          "2019.01.01 D",
          "2019.11.15 Z",
          "2019.08.02 D",
          "2019.07.01 D",
          "2018.12.28 Z",
        ]
      )
    ).toEqual(expect.arrayContaining([1, 4, 5]));
  });

  test("#3 반례", () => {
    expect(
      solution(
        "2023.01.01",
        ["A 6"],
        ["2022.07.01 A", "2022.07.01 A", "2022.07.01 A"]
      )
    ).toEqual(expect.arrayContaining([1, 2, 3]));
  });

  test("#4 반례", () => {
    expect(
      solution("2020.10.15", ["A 100"], ["2018.06.16 A", "2008.02.15 A"])
    ).toEqual(expect.arrayContaining([2]));
  });

  test("#5 반례", () => {
    expect(
      solution("2019.12.09", ["A 12"], ["2018.12.10 A", "2010.10.10 A"])
    ).toEqual(expect.arrayContaining([2]));
  });

  test("#6 17번 반례", () => {
    expect(solution("2009.12.31", ["A 13"], ["2008.11.03 A"])).toEqual(
      expect.arrayContaining([1])
    );
  });
});
