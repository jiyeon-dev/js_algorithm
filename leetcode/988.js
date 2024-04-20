/**
 * https://leetcode.com/problems/smallest-string-starting-from-leaf/description/
 *
 * lexicographically smallest string
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
 * @return {string}
 */
var smallestFromLeaf = function (root) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  let word = ""; // 가장 작은 단어 저장
  function dfs(root, char) {
    if (!root) return;

    char = alphabet[root.val] + char;

    // leaf인 경우
    if (!root.left && !root.right) {
      if (!word) word = char;
      else word = word < char ? word : char; // 글자 비교
      return;
    }

    if (root.left) dfs(root.left, char);
    if (root.right) dfs(root.right, char);
  }

  dfs(root, "");
  return word;
};

module.exports = smallestFromLeaf;
