# Remove Linked List Elements
[Link](https://leetcode.com/problems/remove-linked-list-elements/description/)

Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.


Example: 
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
Example 2:

Input: head = [], val = 1
Output: []
Example 3:

Input: head = [7,7,7,7], val = 7
Output: []


## Approach
My approach is based on different scenarios.  
- If the node to be removed (equal to the given `val`) lies somewhere in the middle, I can simply unlink it using:  
  `prev.next = prev.next.next`.

- However, if the node to be removed is at the start of the list (i.e., the head), handling becomes tricky.  
  To simplify this, I use a **dummy node (sentinel node)** that always points to the head.  
  This way, I can apply the same unlinking logic consistently without writing special conditions for the head.


1. create a sentinel Node;
2. sentinel node referred the head;
3. create a prev variable that initial value in sentinel node so i apply my logic correctly.
4. checking all the node that contains given val and unlink them.
```
sentinelNode;

sentinelNode.next = head;

prev = sentinelNode;

while(prev && prev.next){
  if(prev.next.val === val){
    prev.next = prev.next.next;
  }else{
    prev = prev.next;
  }
}

return sentinelNode.next;

```
5. at the end my sentinel node next pointer basically pointing the head value of node so return the new head;


### Time and Spcae Complexity
**Time-Complexiy:** O(n);
**Space-Complexity:** O(1): no extra space used.


[Code](./solution.js)

**By vikas singh**