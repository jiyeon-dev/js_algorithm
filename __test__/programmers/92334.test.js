const solution = require("../../programmers/92334");

describe("신고 결과 받기", () => {
  test("#1 expect [2,1,1,0]", () => {
    expect(
      solution(
        ["muzi", "frodo", "apeach", "neo"],
        ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
        2
      )
    ).toEqual(expect.arrayContaining([2, 1, 1, 0]));
  });

  test("#2 expect [0,0]", () => {
    expect(
      solution(
        ["con", "ryan"],
        ["ryan con", "ryan con", "ryan con", "ryan con"],
        3
      )
    ).toEqual(expect.arrayContaining([0, 0]));
  });
});
