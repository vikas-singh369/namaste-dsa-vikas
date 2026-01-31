var deleteMiddle = function (head) {
    if (!head.next) return null

    let slow = head;
    let fast = head.next?.next;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next?.next;
    }

    slow.next = slow.next.next;

    return head;
};