
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let rear = new ListNode();
  let current_reference = rear;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      current_reference.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      current_reference.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    current_reference = current_reference.next;
  }
  current_reference.next = l1 || l2;
  return rear.next;
};