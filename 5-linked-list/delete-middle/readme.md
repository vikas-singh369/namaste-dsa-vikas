# Delete the Middle Node of a Linked List

(leetCode - 2095)
You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.

Example 1:

Input: head = [1,3,4,7,1,2,6]
Output: [1,3,4,1,2,6]

## Approach (Two pointer):

The length of the linked list is not given,
so I used the slow and fast pointer approach.

The `slow` pointer moves one step at a time, and the `fast` pointer moves two steps at a time.
This helps reach the middle of the list in one pass.

Since the list uses 0-based indexing and the problem asks to delete the middle node, I need the slow pointer to stop one node before the middle.

i initilize my `slow = head` and `fast = head.next.next` fast 2 step ahead beacause list start 0 and so i need 2 step difference

when the `fast` and `fast.next` pointer reaches the end, the slow pointer is positioned just before the middle node.

Then I delete the middle node by skipping it:

```
slow.next = slow.next.next;

```

Finally, I return the head of the modified list.

## Time and Space Complexity

**Time Complexity** : O(n) - number of nodes.
**Space Complexity**: O(1)

**[Code](./solution.js)**

**By vikas singh**
