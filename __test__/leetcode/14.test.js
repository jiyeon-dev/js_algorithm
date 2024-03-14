const solution = require("../../leetcode/14");

describe("longest-common-prefix", () => {
  test("#1", () => {
    expect(solution(["flower", "flow", "flight"])).toEqual("fl");
  });
  test("#2", () => {
    expect(solution(["dog", "racecar", "car"])).toEqual("");
  });
  test("#3 반례 - 시작이 일치하지 않음", () => {
    expect(solution(["a", "racdoar", "rac"])).toEqual("");
  });
});
