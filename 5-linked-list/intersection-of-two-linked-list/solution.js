/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var getIntersectionNode = function (headA, headB) {
  let store = new Set();
  let curr = headB;

  while (curr) {
    store.add(curr);
    curr = curr.next;
  }
  curr = headA;

  while (curr) {
    if (store.has(curr)) {
      return curr;
    }
    curr = curr.next;
  }
  return curr;
};