var rotateRight = function (head, k) {
  if (!head || k === 0) return head;

  // inilize two variable
  let slow = head;
  let fast = head;

  // calculate the list leangth;
  let length = 0;
  let curr = head;
  while (curr) {
    length++;
    curr = curr.next;
  }

  let kPosition = k % length;

  if (kPosition === 0) return head;

  // move fast k position
  for (let i = 0; i < kPosition; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  let newHead = slow.next;

  slow.next = null;

  fast.next = head;

  return newHead;
};
