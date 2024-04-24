const solution = require("../../leetcode/30");

describe("Substring with Concatenation of All Words", () => {
  test("#1", () => {
    expect(solution("barfoothefoobarman", ["foo", "bar"])).toEqual(
      expect.arrayContaining([0, 9])
    );
  });
  test("#2", () => {
    expect(
      solution("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])
    ).toEqual(expect.arrayContaining([]));
  });
  test("#3", () => {
    expect(solution("barfoofoobarthefoobarman", ["bar", "foo", "the"])).toEqual(
      expect.arrayContaining([6, 9, 12])
    );
  });
});
