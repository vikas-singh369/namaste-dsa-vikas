# Merge Sorted Array 
[Link](https://leetcode.com/problems/merge-sorted-array/)

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.



## Approach 1 : Brute Force – Simple Concatenate + Sort
my approach is overwrite `nums1` array in the place of zero the `nums2` array value to the first array and use sort() method and sort it. 

[Code](./solution.js)

## Time and Spce Complexity

- **Time Complexity** : - O((m+n)log m+n) ( due to sorting )
- **Space Complexity** : - O (1) no extra space use


## Approach 2 : Two-Pointer Method

Instead of sorting using two pointer  first copy the `nums1` value so value could be safe then `nums1Copy` array and `nums2` array compare the value and track through the pointer and replace the `nums1` array value.

- 1. Copy `nums1` array
- 2. initilize two pointer `p1 = 0` and `p2 =0 `
-3. loop the array `i < m+n`

```
if( p1 < m  && nums1Copy[p1] < nums2[p2] || p2>=n ){
  nums1[i] = nums1Copy[p1];
  p1++;
}else{
  nums1[i] = nums2[p2];
  p2++
}
```

[Code](./solution2.js)

## Time and Spce Complexity
- **Time Complexity** : - O(m+n)
- **Space Complexity** : - O (m+n) used extra space



## Approach 3 : Optimize space complexity
The goal is filled the value in reverse order to the nums1 in the place we have already two sorted array 
nums1 - with m+n length, there only m elements are valid
nums2 - with n length 

using two pointer approach `p1` pointer point  to the nums1 valid element last value `p1 = m-1` and the second `p2` pointer point to the nums2 last element `p2 = n -1`;

loop the array m+n length.

```
for(i = m + n - 1 ; i >= 0 ; i--){

  if ( p2 < 0 ) break;

  if( (nums1[p1] > nums2[p2] && p1 >=0)){
    nums[i] = nums1[p1];
    p1--;
  }else {
    nums[i] = nums2[p2];
    p2--;
  }
}

```

- because if my p2 finish nums1 value is already sorted so no need to the all operation.


## Time and Spce Complexity
- **Time Complexity** : - O(m+n)
- **Space Complexity** : - O (1) no extra space used.


[Code](./solution3.js)


**By vikas singh**