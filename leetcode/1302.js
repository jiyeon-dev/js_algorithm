/**
 * https://leetcode.com/problems/deepest-leaves-sum/
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  let deepest = 0; // 가장 깊은 깊이
  const leaves = {}; // 마지막 노드 깊이 별 누적 값

  const dfs = (node, depth) => {
    if (!node) return;

    // 마지막 노드인 경우
    if (!node.left && !node.right) {
      if (!leaves[depth]) leaves[depth] = 0;
      leaves[depth] += node.val;
      deepest = Math.max(deepest, depth);
    }

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  };

  dfs(root, 0);
  return leaves[deepest];
};

module.exports = deepestLeavesSum;
