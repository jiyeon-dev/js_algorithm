/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head) return null;

  // 1) 전체 리스트 수 조회
  let temp = head;
  let length = 0;
  while (temp) {
    length++;
    temp = temp.next;
  }

  // 2) 제거
  let deleteNodeIndex = length - n; // 삭제해야하는 index 번호
  if (deleteNodeIndex === 0) return head.next;

  temp = head;
  // 삭제해야하는 번호 앞까지만 복사
  while (deleteNodeIndex > 1) {
    temp = temp.next;
    deleteNodeIndex--;
  }
  // 삭제
  temp.next = temp.next.next;

  return head;
};
