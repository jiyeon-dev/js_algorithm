const solution = require("../../programmers/160586");

describe("대충 만든 자판", () => {
  test("#1", () => {
    expect(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])).toEqual(
      expect.arrayContaining([9, 4])
    );
  });
  test("#2", () => {
    expect(solution(["AA"], ["B"])).toEqual(expect.arrayContaining([-1]));
  });
  test("#3", () => {
    expect(solution(["AGZ", "BSSS"], ["ASA", "BGZ"])).toEqual(
      expect.arrayContaining([4, 6])
    );
  });
  test("#4 반례 : 포함되지 않는 알파벳도 있는 경우", () => {
    expect(solution(["AGZ", "BSSS"], ["ASAH", "BGZ"])).toEqual(
      expect.arrayContaining([-1, 6])
    );
  });
});
