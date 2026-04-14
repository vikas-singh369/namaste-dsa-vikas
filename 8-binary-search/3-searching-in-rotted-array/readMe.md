# Search in Rotated Sorted Array

[Link](https://leetcode.com/problems/search-in-rotated-sorted-array/description/)

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly left rotated at an unknown index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be left rotated by 3 indices and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

## Approach:

Approach is applying binary search to achive the O(log n) time complexity ,

calculate the middle value and check is left side shorted or right side is sorted if i found the sorted part then check my target value is exist this range or not if exist then based on the checking do operations in this searching space.

1.  initilize two pointer `left` and `right`

2.  find the middle value , check which part is sorted based on the middle value.

3.  if left is sorted then, checking the range of the target value that exist or not in this searching space else checking in right part target value and based on the checking moving the pointer and cutting the searching space

```
while ( left <= right ){

 middle = left + right / 2

 if( arr[middle] === target){
   return arr[middle]
 }

 if( arr[left] < arr[right]){

   if( arr[left] <= arr[middle] && target < arr[middle]){
     right = m -1;
   }else {
     left = m+1
   }


 }else {

   if( arr[middle]< target && target <= arr[right]){
     left = m+1
   }else {
     right = m-1;
   }
 }
}
```

### Time and space complexity:

**Time-complexity :** O(log n)

**space-complexity :** O(1) no extra spcae used

**[Code](./solution.js)**

**By vikas singh**
