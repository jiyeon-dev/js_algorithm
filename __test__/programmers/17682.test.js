const solution = require("../../programmers/17682");

describe("[1차] 다트 게임", () => {
  test("#1", () => {
    expect(solution("1S2D*3T")).toEqual(37);
  });
  test("#2", () => {
    expect(solution("1D2S#10S")).toEqual(9);
  });
  test("#3", () => {
    expect(solution("1D2S0T")).toEqual(3);
  });
  test("#4 - 첫번째 점수만 2배, 스타상 중첩", () => {
    expect(solution("1S*2T*3S")).toEqual(23);
  });
  test("#5 - 스타상, 아차상 중첩", () => {
    expect(solution("1D#2S*3S")).toEqual(5);
  });
  test("#6", () => {
    expect(solution("1T2D3D#")).toEqual(-4);
  });
  test("#7", () => {
    expect(solution("1D2S3T*")).toEqual(59);
  });
});
