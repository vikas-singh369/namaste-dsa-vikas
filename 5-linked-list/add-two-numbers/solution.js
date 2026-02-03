var addTwoNumbers = function (l1, l2) {
  let headPoint = new ListNode();
  let curr = headPoint;
  let carry = 0;

  while (l1 || l2 || carry) {
    let firstValue = l1 ? l1.val : 0;
    let secondValue = l2 ? l2.val : 0;

    let sum = firstValue + secondValue + carry;

    let digit = sum % 10;
    carry = Math.floor(sum / 10);

    curr.next = new ListNode(digit);
    curr = curr.next;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return headPoint.next;
};
