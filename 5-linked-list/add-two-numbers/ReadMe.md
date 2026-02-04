# Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.


## Approach: 

my Approach is traversed both linked lists node by node,
added the corresponding values along with a carry,
and created a new node for each digit of the result.

```
carry = 0
firstval = l1.val;
secondval = l2.val;

sum = firstval + secondval + carry;
carry = sum/10;
digit = sum % 10;

newNode(digit);

// move the new List
```

handle edge cases if carry remaining or any list fully traversed then ;

```
l1 = l1? l1.next ? null;
l2 = l2? l2.next ? null;
```

## Time and Space Complexity 
**Time Complexity** : O(n) - number of nodes.
**Space Complexity**: O(n) - store every node to new list.

[Code](./solution.js)


**By vikas singh**