const solution = require("../../programmers/72410");

describe("신규 아이디 추천", () => {
  test("#1", () => {
    expect(solution("...!@BaT#*..y.abcdefghijklm")).toEqual("bat.y.abcdefghi");
  });
  test("#2", () => {
    expect(solution("z-+.^.")).toEqual("z--");
  });
  test("#3", () => {
    expect(solution("=.=")).toEqual("aaa");
  });
  test("#4", () => {
    expect(solution("123_.def")).toEqual("123_.def");
  });
  test("#5", () => {
    expect(solution("abcdefghijklmn.p")).toEqual("abcdefghijklmn");
  });
});
