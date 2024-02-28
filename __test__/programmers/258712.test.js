const solution = require("../../programmers/258712");

describe("Kakao 2024. 가장 많이 받은 선물", () => {
  test("#1", () => {
    expect(
      solution(
        ["muzi", "ryan", "frodo", "neo"],
        [
          "muzi frodo",
          "muzi frodo",
          "ryan muzi",
          "ryan muzi",
          "ryan muzi",
          "frodo muzi",
          "frodo ryan",
          "neo muzi",
        ]
      )
    ).toBe(2);
  });

  test("#2", () => {
    expect(
      solution(
        ["joy", "brad", "alessandro", "conan", "david"],
        [
          "alessandro brad",
          "alessandro joy",
          "alessandro conan",
          "david alessandro",
          "alessandro david",
        ]
      )
    ).toBe(4);
  });

  test("#3", () => {
    expect(
      solution(["a", "b", "c"], ["a b", "b a", "c a", "a c", "a c", "c a"])
    ).toBe(0);
  });
});
