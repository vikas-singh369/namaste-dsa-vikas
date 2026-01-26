# Merge Two Sorted Lists

[Link](https://leetcode.com/problems/merge-two-sorted-lists/description/)

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example : Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []

## Approach

My approach is compare both list value and based on that make a sorted list.

- I want a starting point `curr` node so i compare the both value and find next smaller element means smallest value so i used dummy node or we say sentinel node concept.

- if Any of them list exhausted then curr.next point the reamaining list node.

```
headPoint = new ListNode();

curr = headPoint;

while( l1 && l2 ){

  if(l1.val < l2.val ){
    curr.next = l1
    l1 = l1.next
  }else{
    curr.next = l2
    l2 = l2.next
  }

  curr = curr.next;
}

if (!l1) curr.next = l2
if (!l2) curr.next = l1


// return the staring point of list
return headPoint.next
```

- This code also handled the all corner cases so no need.

### Time and Spcae Complexity

**Time-Complexity** O(n)
**Space-Complexity** O(1)

[Code](./solution.js)

**By vikas singh**
