const solution = require("../../leetcode/930");

describe("Binary Subarrays With Sum", () => {
  test("#1", () => {
    expect(solution([1, 0, 1, 0, 1], 2)).toEqual(4);
  });
  test("#2", () => {
    expect(solution([0, 0, 0, 0, 0], 0)).toEqual(15);
  });
});
