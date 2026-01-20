var isPalindrome = function (head) {
  // traverse the list find the mid

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the remaining
  let prev = null;

  while (slow) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  // comparing both
  let first = head;
  let second = prev;

  while (second) {
    if (first.val != second.val) {
      return false;
    }

    first = first.next;
    second = second.next;
  }

  return true;
};
