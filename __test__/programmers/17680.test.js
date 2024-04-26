const solution = require("../../programmers/17680");

describe("2018 KAKAO BLIND RECRUITMENT > [1차] 캐시", () => {
  test("#1", () => {
    expect(
      solution(3, [
        "Jeju",
        "Pangyo",
        "Seoul",
        "NewYork",
        "LA",
        "Jeju",
        "Pangyo",
        "Seoul",
        "NewYork",
        "LA",
      ])
    ).toEqual(50);
  });
  test("#2", () => {
    expect(
      solution(3, [
        "Jeju",
        "Pangyo",
        "Seoul",
        "Jeju",
        "Pangyo",
        "Seoul",
        "Jeju",
        "Pangyo",
        "Seoul",
      ])
    ).toEqual(21);
  });
  test("#3", () => {
    expect(
      solution(2, [
        "Jeju",
        "Pangyo",
        "Seoul",
        "NewYork",
        "LA",
        "SanFrancisco",
        "Seoul",
        "Rome",
        "Paris",
        "Jeju",
        "NewYork",
        "Rome",
      ])
    ).toEqual(60);
  });
  test("#4", () => {
    expect(
      solution(5, [
        "Jeju",
        "Pangyo",
        "Seoul",
        "NewYork",
        "LA",
        "SanFrancisco",
        "Seoul",
        "Rome",
        "Paris",
        "Jeju",
        "NewYork",
        "Rome",
      ])
    ).toEqual(52);
  });
  test("#5", () => {
    expect(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"])).toEqual(16);
  });
  test("#6", () => {
    expect(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"])).toEqual(
      25
    );
  });
});
