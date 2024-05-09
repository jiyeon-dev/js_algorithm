const solution = require("../../programmers/70129");

describe("이진 변환 반복하기", () => {
  test("#1", () => {
    expect(solution("110010101001")).toEqual(expect.arrayContaining([3, 8]));
  });
  test("#2", () => {
    expect(solution("01110")).toEqual(expect.arrayContaining([3, 3]));
  });
  test("#3", () => {
    expect(solution("1111111")).toEqual(expect.arrayContaining([4, 1]));
  });
});
