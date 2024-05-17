const solution = require("../../leetcode/1325");
const { createTreeNode } = require("../../utils/TreeNode");

describe("Delete Leaves With a Given Value", () => {
  test("#1", () => {
    expect(solution(createTreeNode([1, 2, 3, 2, null, 2, 4]), 2)).toEqual(
      createTreeNode([1, null, 3, null, 4])
    );
  });
  test("#2", () => {
    expect(solution(createTreeNode([1, 3, 3, 3, 2]), 3)).toEqual(
      createTreeNode([1, 3, null, null, 2])
    );
  });
  test("#3", () => {
    expect(solution(createTreeNode([1, 2, null, 2, null, 2]), 2)).toEqual(
      createTreeNode([1])
    );
  });
});
