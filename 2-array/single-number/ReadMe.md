# Single Number [Link](https://leetcode.com/problems/single-number/description/)

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:

Input: nums = [2,2,1]

Output: 1

Example 2:

Input: nums = [4,1,2,1,2]

Output: 4


## 1 Approach (Brute force {Hash table})

1. create a empty hash table to store each value count.

2. Iterate the array and update the hash table count for each element.

3. loop ones again the hash table and find the count value 1 element and return the key (element)

[code](./solution.js)

## Time and Space Complexity

**Time Complexity** : O(n) -> loop ones one for the array and one for the map.

**Space Complexity** : O(n) -> hashTable store the value order of `n` worst case.



## 2 Approach 

1. apply `xor` conncept and element the duplicate value.

```
a xor a -> a

a xor 0 -> 0
```
[code](./solution2.js)


## Time and Space Complexity

**Time Complexity** : O(n) -> loop ones one for the array.

**Space Complexity** : O(1) -> no extra space used


**By vikas singh**
