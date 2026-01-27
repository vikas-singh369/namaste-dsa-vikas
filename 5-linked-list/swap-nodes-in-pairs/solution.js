var swapPairs = function (head) {
  if (!head || !head.next) return head;

  // create a dummy node
  let dummyNode = new ListNode();

  dummyNode.next = head;

  // initilize the pointer variable
  let p = dummyNode;
  let c = head;
  let n = head.next;

  while (c && n) {
    p.next = c.next;
    c.next = n.next;
    n.next = c;

    // movie pointer
    p = c;
    c = p.next;
    n = c && c.next;
  }

  return dummyNode.next;
};