# Merge Sort

Merge sort is divide and conquer algoritham

## Approach ( sorting technique ) :
 divide , conquer, and combine

1. divide :  the array into two parts

2. conquer: recursively sort each part using the same function until i hit the base case when the funtion hit the base case that time curr array is sorted.

3. combine: using one helper function to merge two sorted array into one sorted array.

**merge** helper function works using two pointer approach to compare and create new sorted array and return it.


### Time and Space Complexity
**Time Compolexity:** O(n log n) divides takes log n times

**Space Complexity:** O(n) call stack


**[Code](./solution.js)**

**By vikas singh**