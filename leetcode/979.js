/**
 * https://leetcode.com/problems/distribute-coins-in-binary-tree/
 *
 * - Editorial 을 보고 해결 방법을 찾음...
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
var distributeCoins = function (root) {
  let moves = 0;

  const dfs = (node) => {
    if (!node) return;
    if (!node.left && !node.right) return node.val - 1;

    const left = dfs(node.left) ?? 0;
    const right = dfs(node.right) ?? 0;
    moves += Math.abs(left) + Math.abs(right);
    return node.val - 1 + left + right;
  };

  dfs(root);
  return moves;
};

module.exports = distributeCoins;
