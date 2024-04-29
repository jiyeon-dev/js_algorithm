const solution = require("../../programmers/17684");

describe("[3차] 압축", () => {
  test("#1", () => {
    expect(solution("KAKAO")).toEqual(expect.arrayContaining([11, 1, 27, 15]));
  });
  test("#2", () => {
    expect(solution("TOBEORNOTTOBEORTOBEORNOT")).toEqual(
      expect.arrayContaining([
        20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34,
      ])
    );
  });
  test("#2", () => {
    expect(solution("ABABABABABABABAB	")).toEqual(
      expect.arrayContaining([1, 2, 27, 29, 28, 31, 30])
    );
  });
});
