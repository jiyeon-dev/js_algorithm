/**
 * https://leetcode.com/problems/path-sum/description/
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let flag = false;
  function dfs(root, sum) {
    if (!root) return;

    let sumNum = sum + root.val;
    if (!root.left && !root.right && targetSum === sumNum) {
      flag = true;
      return;
    }

    dfs(root.left, sumNum);
    dfs(root.right, sumNum);
  }

  dfs(root, 0);
  return flag;
};

module.exports = hasPathSum;
