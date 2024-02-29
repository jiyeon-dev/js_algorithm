const solution = require("../../programmers/42888");

describe("오픈채팅방", () => {
  test("#1", () => {
    expect(
      solution([
        "Enter uid1234 Muzi",
        "Enter uid4567 Prodo",
        "Leave uid1234",
        "Enter uid1234 Prodo",
        "Change uid4567 Ryan",
      ])
    ).toEqual(
      expect.arrayContaining([
        "Prodo님이 들어왔습니다.",
        "Ryan님이 들어왔습니다.",
        "Prodo님이 나갔습니다.",
        "Prodo님이 들어왔습니다.",
      ])
    );
  });
});
