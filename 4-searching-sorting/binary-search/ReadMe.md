# Binary Search

Given an array of integers `nums` which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its `index`. Otherwise, return `-1`

[Link](https://leetcode.com/problems/binary-search/description/)

Example
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

## Approach (searching technique)

1. initilize two variable that point the start of the array `left` and the end of the array `right`

2. find out the middle index ` middle = (left + right ) / 2`

3. if my middle index array element is equal to target value `nums[middle} === target` i simply return the index `middle`;

4. else if my target value is grater then my middle value then i just re-assign my `left` pointer to new value `left = middle + 1` because if my target is grater then my target value relay on the `right side`;

5. if target is less then middle then my target relay on the left side i just re-assign my `right` pointer to ` left = middle - 1`;

6. I will repeat the process again and again until i found my `target` if my target is not availabe then i return the `-1` How i do that i just check my `left` and `right` cross each other `right > left `

7. And if my array has only one value so i also consider that so i check my condition greater and eqaul so i modified it base condition `right >= left` it also run if my array has only one value.

```
left = 0;
right = arr.length - 1;

while( right >= left){
  let mid = ( left + right ) / 2;

  if( target === mid){
    return mid;
  }else if( target > mid){
    left = m + 1;
  }else {
    right = m - 1
  }
}

return -1;
```

### ## Time and Spce Complexity

- **Time Complexity:** O(log n) - every iteration half of the array length;
- **Space Complexity:** O( 1 ) - no extra input size used.

[code](./solution.js)

**By vikas singh **
