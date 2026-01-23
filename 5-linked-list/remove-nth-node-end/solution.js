/*
* two pass Approach
*/
var removeNthFromEnd = function (head, n) {
  // create sentinel node
  let sentinel = new ListNode();
  sentinel.next = head;

  // calculate the length of list
  let length = 0;

  let curr = head;

  while (curr) {
    length++;
    curr = curr.next;
  }

  // find the prevPosition
  let prevPosition = length - n;

  let prev = sentinel;

  for (let i = 0; i < prevPosition; i++) {
    prev = prev.next;
  }

  // remove
  prev.next = prev.next.next;

  return sentinel.next;
};
