/**
 * https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/
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
var sumEvenGrandparent = function (root) {
  let sum = 0;
  const dfs = (node, depth, evenDepth) => {
    if (!node) return;
    // 짝수인 경우
    if (node.val % 2 === 0) evenDepth.push(depth);
    // 조상이 짝수인 경우
    if (evenDepth.indexOf(depth - 2) > -1) sum += node.val;

    dfs(node.left, depth + 1, [...evenDepth]);
    dfs(node.right, depth + 1, [...evenDepth]);
  };

  dfs(root, 0, []);
  return sum;
};

module.exports = sumEvenGrandparent;
