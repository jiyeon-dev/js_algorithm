const solution = require("../../leetcode/1302");
const { createTreeNode } = require("../../utils/TreeNode");

describe(" Deepest Leaves Sum", () => {
  test("#1", () => {
    expect(
      solution(
        createTreeNode([1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8])
      )
    ).toEqual(15);
  });
  test("#2", () => {
    expect(
      solution(
        createTreeNode([
          6,
          7,
          8,
          2,
          7,
          1,
          3,
          9,
          null,
          1,
          4,
          null,
          null,
          null,
          5,
        ])
      )
    ).toEqual(19);
  });
});
