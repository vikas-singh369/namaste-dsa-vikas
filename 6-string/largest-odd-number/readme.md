# Largest Odd Number in String

{ LeetCode problem no. 1903}

You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

A substring is a contiguous sequence of characters within a string.

Example 1:

Input: num = "52"
Output: "5"
Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.


## Approach 
The idea was very simple start index at the end of the string and travarsed and checked one by one to first odd digit, as soon as my first odd digit find then i return substring that start from the 0 index and also include that first odd digit that we found in backward checking.

## Time and Space Complexity

**Time Complexity** : O(n)
**Space Complexity**: O(1) constant extra space.

**[Code](./solution.js)**

**By vikas singh**