const solution = require("../../leetcode/2785");

describe("Sort Vowels in a String", () => {
  test("#1", () => {
    expect(solution("lEetcOde")).toEqual("lEOtcede");
  });
  test("#2", () => {
    expect(solution("lYmpH")).toEqual("lYmpH");
  });
});
