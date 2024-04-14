/**
 * https://leetcode.com/problems/merge-two-binary-trees/description/
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 === null && !root2) return null;
  if (!root1) return root2;
  if (!root2) return root1;

  let root = new TreeNode(root1?.val + root2?.val); // 새로운 트리노드 생성
  root.left = mergeTrees(root1.left, root2.left); // 왼쪽
  root.right = mergeTrees(root1.right, root2.right); // 오른쪽
  return root;
};

module.exports = mergeTrees;
