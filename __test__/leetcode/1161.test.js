const solution = require("../../leetcode/1161");
const { createTreeNode } = require("../../utils/TreeNode");

describe("Maximum Level Sum of a Binary Tree", () => {
  test("#1", () => {
    expect(solution(createTreeNode([1, 7, 0, 7, -8, null, null]))).toEqual(2);
  });
  test("#2", () => {
    expect(
      solution(
        createTreeNode([
          989,
          null,
          10250,
          98693,
          -89388,
          null,
          null,
          null,
          -32127,
        ])
      )
    ).toEqual(2);
  });
});
