/**
 * https://leetcode.com/problems/sum-root-to-leaf-numbers/description/
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
var sumNumbers = function (root) {
  let total = 0;

  function search(sum, root) {
    if (!root) return;

    let sumNum = sum * 10 + root.val;
    if (!root.left && !root.right) total += sumNum;

    search(sumNum, root.left);
    search(sumNum, root.right);
  }

  search(0, root);
  return total;
};

module.exports = sumNumbers;
