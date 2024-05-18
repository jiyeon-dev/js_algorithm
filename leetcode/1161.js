/**
 * https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/
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
var maxLevelSum = function (root) {
  const deep = {}; // 깊이별 합
  const dfs = (node, depth) => {
    if (!node) return;
    if (!deep[depth]) deep[depth] = 0;

    deep[depth] += node.val;

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  };
  dfs(root, 1);

  // 가장 큰 합을 가진 가장 낮은 레벨의 깊이 조회
  let maximal = -Infinity,
    level = 0;
  for (let depth of Object.keys(deep)) {
    if (maximal < deep[depth]) {
      maximal = deep[depth];
      level = depth;
    }
  }
  return +level;
};

module.exports = maxLevelSum;
