const solution = require("../../programmers/17686");

describe("[3차] 파일명 정렬", () => {
  test("#1", () => {
    expect(
      solution([
        "img12.png",
        "img10.png",
        "img02.png",
        "img1.png",
        "IMG01.GIF",
        "img2.JPG",
      ])
    ).toEqual(
      expect.arrayContaining([
        "img1.png",
        "IMG01.GIF",
        "img02.png",
        "img2.JPG",
        "img10.png",
        "img12.png",
      ])
    );
  });
  test("#2", () => {
    expect(
      solution([
        "F-5 Freedom Fighter",
        "B-50 Superfortress",
        "A-10 Thunderbolt II",
        "F-14 Tomcat",
      ])
    ).toEqual(
      expect.arrayContaining([
        "A-10 Thunderbolt II",
        "B-50 Superfortress",
        "F-5 Freedom Fighter",
        "F-14 Tomcat",
      ])
    );
  });
});
