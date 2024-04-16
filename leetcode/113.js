/**
 * https://leetcode.com/problems/path-sum-ii/description/
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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const answer = [];

  function dfs(sum, root, arr) {
    if (!root) return;

    let sumNum = sum + root.val;

    if (!root.left && !root.right) {
      if (targetSum === sumNum) {
        answer.push([...arr, root.val]);
      }
      return;
    }

    dfs(sumNum, root.left, [...arr, root.val]);
    dfs(sumNum, root.right, [...arr, root.val]);
  }

  dfs(0, root, []);
  return answer;
};

module.exports = pathSum;
