# Rotate List

Given the head of a linked list, rotate the list to the right by k places.

## Approach
First calculate the length of the list.  
After that, calculate the k position using modulo.  
If kPosition === 0, then no rotation is required because after a full rotation each node comes back to its original position.

Initialize two variables `slow` and `fast`.  
`slow` starts from the head and `fast` starts k positions ahead.

Now move both pointers together.  
When `fast.next` reaches `null`, the `slow` pointer will be at the desired position.

Break the list at `slow` and rewire the pointers to get the rotated list.


### Time and Spcae Complexity
**Time-Complexity** O(n)
**Space-Complexity** O(1)


**[Code](./solution.js)**

**By vikas singh**