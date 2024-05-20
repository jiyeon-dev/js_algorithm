const solution = require("../../programmers/131127");

describe("할인 행사", () => {
  test("#1", () => {
    expect(
      solution(
        ["banana", "apple", "rice", "pork", "pot"],
        [3, 2, 2, 2, 1],
        [
          "chicken",
          "apple",
          "apple",
          "banana",
          "rice",
          "apple",
          "pork",
          "banana",
          "pork",
          "rice",
          "pot",
          "banana",
          "apple",
          "banana",
        ]
      )
    ).toEqual(3);
  });
  test("#2", () => {
    expect(
      solution(
        ["apple"],
        [10],
        [
          "banana",
          "banana",
          "banana",
          "banana",
          "banana",
          "banana",
          "banana",
          "banana",
          "banana",
          "banana",
        ]
      )
    ).toEqual(0);
  });
});
