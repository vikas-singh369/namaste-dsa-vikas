# Next Greater Element II

Leetcode problem 503

You are given a circular array. For each element, find the next greater element.

The next greater element of a number is the first greater number to its right while traversing the array circularly. If it does not exist, return -1.

---

## Problem

Find the next greater element for each element in a circular array.

---

## Approach

This problem is solved using a stack and reverse traversal.

- Initialize:
  - n = arr.length
  - ans = Array(n).fill(-1) to store result
  - stack = [] to keep track of next greater elements

- Traverse from (2n - 1) to 0:
  - Use i % n to handle circular behavior

- For each index:
  - While stack is not empty:
    - If current element is less than stack top:
      - That is the next greater element
      - Store it in ans[i % n]
      - Break
    - Else:
      - Pop from stack (not useful)

  - Push current element arr[i % n] into stack

- Return ans

---
Video Explanation : [Link](https://youtube.com/shorts/XNVh99nLTKU?si=s3Jzq6rmSobHqL07)
---

## Why This Works

- Traversing twice simulates circular array
- Stack helps keep only useful greater elements
- We remove smaller elements because they can never be next greater

---

## What I Learned

- Circular array problems can be handled using modulo
- Reverse traversal helps in solving next greater problems
- Stack is powerful for monotonic problems

---

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)

---

## Code Link

[Code](./solution.js)

---

By vikas singh
