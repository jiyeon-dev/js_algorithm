const solution = require("../../programmers/178871");

describe("달리기 경주", () => {
  test("#1", () => {
    expect(
      solution(
        ["mumu", "soe", "poe", "kai", "mine"],
        ["kai", "kai", "mine", "mine"]
      )
    ).toEqual(expect.arrayContaining(["mumu", "kai", "mine", "soe", "poe"]));
  });
});
