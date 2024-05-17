const solution = require("../../leetcode/1315");
const { createTreeNode } = require("../../utils/TreeNode");

describe("Sum of Nodes with Even-Valued Grandparent", () => {
  test("#1", () => {
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
    ).toEqual(18);
  });
  test("#2", () => {
    expect(solution(createTreeNode([1]))).toEqual(0);
  });
});
