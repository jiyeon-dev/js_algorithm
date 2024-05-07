/**
 * https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function (head) {
  let number = "";
  while (head) {
    number += head.val;
    head = head.next;
  }

  number = `${BigInt(number) * BigInt(2)}`;

  let result = null;
  let cur = null;
  for (let i = 0; i < number.length; i++) {
    if (cur) {
      cur.next = new ListNode(number[i]);
      cur = cur.next;
    } else {
      cur = new ListNode(number[i]);
      result = cur;
    }
  }
  return result;
};

module.exports = doubleIt;
