# Insertion Sort

Position based sorting algoritham

## Approach ( sorting technique )

Assume the first element of the array is already sorted, and the remaining elements are unsorted.

We then pick elements one by one from the unsorted part and compare the current element with the elements in the sorted part (to its left).

While comparing, if elements in the sorted part are greater than the current element, we shift them one position ahead to create space.

Once we find the correct position where the current element belongs, we insert it there.

This process continues until the entire array becomes sorted.


### Time and Space Complexity
**Time Compolexity:** O(n^2)
**Space Complexity:** O(1) no extra space 


**[Code](./solution.js)**

**By vikas singh**