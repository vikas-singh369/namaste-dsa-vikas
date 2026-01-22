var getIntersectionNode = function (headA, headB) {
    // checking one by one all headA value to headB value
    let currA = headA;

    while (currA != null) {

        let currB = headB;
        while (currB != null) {
            if (currA === currB) {
                return currA;
            }
            currB = currB.next;
        }
        currA = currA.next;
    }
    return null;
};