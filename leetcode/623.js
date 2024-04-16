/**
 * https://leetcode.com/problems/add-one-row-to-tree/description/
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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
  if (depth === 1) return new TreeNode(val, root, null);

  function dfs(root, nodeDepth) {
    if (!root) return;
    if (depth - 1 === nodeDepth) {
      root.left = new TreeNode(val, root.left, null);
      root.right = new TreeNode(val, null, root.right);
    }

    dfs(root.left, nodeDepth + 1);
    dfs(root.right, nodeDepth + 1);
  }

  dfs(root, 1);
  return root;
};

module.exports = addOneRow;
