/*
* one pass Approach
*/
var removeNthFromEnd = function (head, n) {
    // create sentinel node 
    let sentinel = new ListNode();
    sentinel.next = head;

    // first pointer nth position ahead
    let first = sentinel;

    for (let i = 0; i < n; i++) {
        first = first.next;
    }
    // run both pointer 1 step at time until first pointer reach null
    let second = sentinel;

    while (first.next) {
        first = first.next;
        second = second.next;
    }
    // remove the nth element at the end 
    second.next = second.next.next;

    // return the new head;
    return sentinel.next;
};