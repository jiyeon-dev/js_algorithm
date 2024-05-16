/**
 * https://leetcode.com/problems/evaluate-boolean-binary-tree/
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var evaluateTree = function (root) {
  const dfs = (node) => {
    if (node.val === 0 || node.val === 1) {
      return node.val === 1;
    } else if (node.val === 2) {
      return dfs(node.left) || dfs(node.right);
    } else {
      return dfs(node.left) && dfs(node.right);
    }
  };

  return dfs(root);
};

module.exports = evaluateTree;
