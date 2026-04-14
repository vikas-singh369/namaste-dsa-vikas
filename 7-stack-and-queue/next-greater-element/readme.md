# Next Greater Element I

Leetcode problem 496

You are given two arrays nums1 and nums2 where nums1 is a subset of nums2.

For each element in nums1, find the next greater element in nums2.

The next greater element of a number is the first greater number to its right in nums2. If it does not exist, return -1.

---

## Problem

Find the next greater element for each element in nums1 based on its position in nums2.

---

## Approach

This problem is solved using a stack and a map.

- Initialize:
  - map = {} to store next greater element for each number in nums2
  - stack = []

- Traverse nums2 from right to left:
  - For each element:
    - While stack is not empty and stack top is less than or equal to current:
      - Pop from stack (not useful)

    - If stack is not empty:
      - stack top is the next greater element
      - Store in map[current] = stack top
    - Else:
      - map[current] = -1

    - Push current element into stack

- Build result for nums1:
  - For each element in nums1:
    - Get value from map and store in result array

- Return result

---

## video Explanation : [Link](https://youtube.com/shorts/GlLi9t7SSXc?si=r9o48wCrCZZ8NyZ6)

---

## Why This Works

- Stack helps track next greater elements efficiently
- We remove smaller elements because they can never be next greater
- Map allows quick lookup for nums1 elements

---

## What I Learned

- Precomputing results can optimize repeated queries
- Stack + map is a powerful combination
- Reverse traversal helps solve next greater problems

---

## Complexity

- Time Complexity: O(n + m)
- Space Complexity: O(n)

---

## Code Link

[solution.js](./solution.js)

---

By vikas singh
