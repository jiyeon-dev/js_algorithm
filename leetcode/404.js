/**
 * https://leetcode.com/problems/sum-of-left-leaves/description/
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var sumOfLeftLeaves = function (root) {
  let answer = 0;

  function search(treeNode) {
    if (!treeNode) return 0;

    if (treeNode.left) {
      // 마지막 왼쪽 노드인 경우
      if (!treeNode.left.left && !treeNode.left.right) {
        answer += treeNode.left.val;
      }
      // 왼쪽에 노드가 또 있는 경우
      else {
        search(treeNode.left);
      }
    }

    // 오른쪽 노드 검사
    search(treeNode.right);
  }

  search(root);
  return answer;
};

module.exports = sumOfLeftLeaves;
