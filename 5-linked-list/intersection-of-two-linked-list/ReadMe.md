# Intersection of Two Linked Lists
[Link](https://leetcode.com/problems/intersection-of-two-linked-lists/description/)

Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

Example: Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'


## Approach : 1 

1. check `headA` node is equal to `headB` all elements if it is true means current node is a node where headA or headB `intersect` happen. so return that current node.

This approach is not good because its take `o(n^2)` Time complexity. but space we are not using extra.

[Code](./firstSolution.js)

## Approach : 2 Otimized and better way to find intersection.

Using `Set` to check the value is intersect or not, checking inside Set Time Complexity is `O(1)`.

steps: 
1. intilize a Set
2. store all the head B value into set Store.
3. loop the `headA` if headA nodes already in Set store it means the curr node is the intersection point so return it.

4. otherwise return `null` 

## Time and Space Complexity
**Time-Complexity:** O(n) 
**Space-Complexity:** O(n)

Space complexity is `O(n)` but the match the value and serching inside the `Set` is `O(1)`.


[Code](./solution.js)

**By vikas singh**