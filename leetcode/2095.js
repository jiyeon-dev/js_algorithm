/**
 * https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/
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
var deleteMiddle = function (head) {
  // 리스트 전체 길이 조회
  let length = 0;
  let temp = head;
  while (temp) {
    length++;
    temp = temp.next;
  }

  // 중간 값 조회
  let mid = Math.floor(length / 2);

  temp = head;
  if (mid === 0) return head.next;

  // 중간 값 제거
  while (mid > 1) {
    temp = temp.next;
    mid--;
  }
  temp.next = temp.next.next;

  return head;
};
