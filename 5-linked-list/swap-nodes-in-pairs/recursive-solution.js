var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let left = head;
  let right = head.next;

  left.next = swapPairs(right.next);
  right.next = left;

  return right;
};