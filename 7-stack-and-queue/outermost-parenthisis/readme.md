# Remove Outermost Parentheses

Leetcode problem 1021

You are given a valid parentheses string. Your task is to remove the outermost parentheses of every primitive string.

Return the final string after removing all outermost parentheses.

---

## Problem

Remove the outermost parentheses from every primitive part of the string.

---

## Approach 1 (Using Stack)

- Initialize:
  - stack = [] to track open parentheses
  - ans = "" to build final string

- Traverse each character in string:
  - If character is '(':
    - Push into stack
    - If stack size > 1:
      - Add '(' to ans

  - If character is ')':
    - If stack size > 1:
      - Add ')' to ans
    - Pop from stack

- Return ans

---

## [Code](./solution.js)

---

## Approach 2 (Without Stack)

- Initialize:
  - level = 0
  - ans = ""

- Traverse each character in string:
  - If character is '(':
    - Increment level
    - If level > 1:
      - Add '(' to ans

  - If character is ')':
    - If level > 1:
      - Add ')' to ans
    - Decrement level

- Return ans

---

## [Code](./solution2.js)

---

## Why This Works

- The outermost parentheses are always at level 1
- We skip adding characters when level is 1
- Only inner parentheses (level > 1) are added to result

---

## What I Learned

- Stack can be replaced with a simple counter in some cases
- Tracking level helps identify nested structures
- Avoid extra space when possible

---

## Complexity

- Approach 1 (Stack):
  - Time Complexity: O(n)
  - Space Complexity: O(n)

- Approach 2 (Without Stack):
  - Time Complexity: O(n)
  - Space Complexity: O(n) (for output string)

---

By vikas singh