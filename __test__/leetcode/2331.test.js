const solution = require("../../leetcode/2331");
const { createTreeNode } = require("../../utils/TreeNode");

describe("Evaluate Boolean Binary Tree", () => {
  test("#1", () => {
    expect(solution(createTreeNode([2, 1, 3, null, null, 0, 1]))).toEqual(true);
  });
  test("#2", () => {
    expect(solution(createTreeNode([0]))).toEqual(false);
  });
});
