/**
 * https://leetcode.com/problems/delete-leaves-with-a-given-value/
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function (root, target) {
  const dfs = (node) => {
    if (!node) return null;

    node.left = dfs(node.left);
    node.right = dfs(node.right);

    // is leaf & target
    if (!node.left && !node.right && node.val === target) {
      return null;
    }

    return node;
  };

  return dfs(root);
};

module.exports = removeLeafNodes;
