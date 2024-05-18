const solution = require("../../leetcode/979");
const { createTreeNode } = require("../../utils/TreeNode");

describe("Distribute Coins in Binary Tree", () => {
  test("#1", () => {
    expect(solution(createTreeNode([3, 0, 0]))).toEqual(2);
  });
  test("#2", () => {
    expect(solution(createTreeNode([0, 3, 0]))).toEqual(3);
  });
  test("#3 - 노드가 null 인 경우", () => {
    expect(solution(createTreeNode([1, 0, 0, null, 3]))).toEqual(4);
  });
});
