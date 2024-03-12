const solution = require("../../programmers/42576");

describe("완주하지 못한 선수", () => {
  test("#1", () => {
    expect(solution(["leo", "kiki", "eden"], ["eden", "kiki"])).toEqual("leo");
  });

  test("#2", () => {
    expect(
      solution(
        ["marina", "josipa", "nikola", "vinko", "filipa"],
        ["josipa", "filipa", "marina", "nikola"]
      )
    ).toEqual("vinko");
  });

  test("#3", () => {
    expect(
      solution(
        ["mislav", "stanko", "mislav", "ana"],
        ["stanko", "ana", "mislav"]
      )
    ).toEqual("mislav");
  });
});
