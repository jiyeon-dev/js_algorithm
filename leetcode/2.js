/**
 * https://leetcode.com/problems/add-two-numbers/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let tmp = 0; // 올림 수
  let result = null;
  let cur = null;

  while (l1 || l2 || tmp) {
    let num1 = 0,
      num2 = 0;
    if (l1) {
      num1 = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      num2 = l2.val;
      l2 = l2.next;
    }

    let num = num1 + num2 + tmp;

    // 올림수 체크
    if (num > 9) {
      num = num - 10;
      tmp = 1;
    } else tmp = 0;

    // 리스트에 추가
    if (cur) {
      cur.next = new ListNode(num);
      cur = cur.next;
    } else {
      cur = new ListNode(num);
      result = cur;
    }
  }

  return result;
};

module.exports = addTwoNumbers;
