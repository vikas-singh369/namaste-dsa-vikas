# First Unique Character in a String

{leetcode problem no. 387}

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:

Input: s = "leetcode"

Output: 0

Explanation:

The character 'l' at index 0 is the first character that does not occur at any other index.

# Approach

The idea was simple create a `freMap` frequency map that store stirng each charcter frequency.

loop through again and check if string charcter to frequency map and find the first charcter that frequency `1` and simply return that charcter index.

## Time and Space Complexity

**Time Complexity** : O(n);
**Space Complexity**: O(1) only 26 charcter so.

**[Code](./solution.js)**

**By vikas singh**
