# Swap Nodes in Pairs

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Example 1:

Input: head = [1,2,3,4]

Output: [2,1,4,3]

## Approach :

To solve this problem i used dummy node so i easily handle the all the edge cases easily and perform the swapPairs operation.

swap the pairs using pointer and rewair them.

repeat the step at a time until the whole nodes rewaire

```
prev = dummyNode;
curr = head;
next = curr.next;

// rewaire
prev.next = next;
curr.next = next.next;
next.next = curr;

// move the pointer
prev = curr;
curr = prev.next;
next = curr && curr.next; // curr became null first
```

## Time and Space Complexity

**Time Complexity:** O(n)
**Space Complexity:** O(1)

[Code](./solution.js)

## Approach (Recursive) :

Think problem in smaller parts.
In recursion, consider only two nodes: first is `left`, second is `right`.

`left.next` will point to already swapped nodes,
and `right.next` will point to `left`.

Edge case:

if node is null → return null

if list has only one node → return that node

```
left.next = swaped(right.next);
right.next = left;
return right;

```

## Time and Space Complexity

**Time Complexity:** O(n)
**Space Complexity:** O(n)

[Code](./recursive-solution.js)

**By vikas singh**
