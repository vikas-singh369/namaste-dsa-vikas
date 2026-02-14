# Split a String in Balanced Strings

{Leetcode problem no. 1221}

Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it into some number of substrings such that:

Each substring is balanced.
Return the maximum number of balanced strings you can obtain.

Example 1:

Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

## Approach

The idea is simple `rCount` and `lCount` if `rCount === lCount` then i increase the maximum because in this stage my `R` and `L` are balanced.

loop through for all the string and at the end return the maximum that we increase.

## Time and Space Complexity

**Time Complexity** : O(n)
**Space Complexity**: O(1) constant extra space.

**[Code](./solution.js)**

**By vikas singh**
