# Daily Temperatures

Leetcode problem 739

You are given an array of daily temperatures. For each day, find how many days you have to wait until a warmer temperature.

If there is no future day with a higher temperature, return 0 for that day.

---

## Problem

For each day, find the number of days until a warmer temperature appears.

---

## Approach 1 (Brute Force)

- For each day i:
  - Check all future days j = i + 1 to n - 1
  - If temperature[j] > temperature[i]:
    - Store j - i in ans[i]
    - Break
  - If no warmer day found:
    - ans[i] remains 0

---

## Approach 2

This problem is solved using a stack and reverse traversal.

- Initialize:
  - n = temperatures.length
  - ans = Array(n).fill(0)
  - stack = [] to store indices

- Traverse from right to left (last day to first day)

- For each index i:
  - While stack is not empty and temperature at stack top is less than or equal to current:
    - Pop from stack (not useful)

  - If stack is not empty:
    - The top of stack is the next warmer day
    - Store difference as stack[top] - i in ans[i]

  - Push current index i into stack

- Return ans

---

## video Explanation : [Link](https://youtube.com/shorts/XNVh99nLTKU?si=unb2ICuTfjlHTgzH)

## Why This Works

- Stack stores indices of days in decreasing temperature order
- We remove all smaller or equal temperatures because they cannot be the next warmer day
- The first greater element on the right gives the correct answer

---

## What I Learned

- Stack with indices is useful when distance is required
- Reverse traversal helps in next greater type problems
- Monotonic stack pattern is very common in interview questions

---

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)

---

## Code Link

[Code](./solution.js)

---

By vikas singh
