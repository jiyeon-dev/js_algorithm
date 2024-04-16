const solution = require("../../leetcode/1436");

describe("Destination City", () => {
  test("#1", () => {
    expect(
      solution([
        ["London", "New York"],
        ["New York", "Lima"],
        ["Lima", "Sao Paulo"],
      ])
    ).toEqual("Sao Paulo");
  });
  test("#2", () => {
    expect(
      solution([
        ["B", "C"],
        ["D", "B"],
        ["C", "A"],
      ])
    ).toEqual("A");
  });
  test("#3", () => {
    expect(solution([["A", "Z"]])).toEqual("Z");
  });
});
