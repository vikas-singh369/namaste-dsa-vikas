# Valid Anagram

{ LeetCode - 242.}

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

## Approach:

t is an anagram only if s contains exactly the same letters as t.

So I used a simple hashmap approach.

First, I traversed string s and stored the frequency of each character in a freStore map.

Then I traversed string t and checked each character in the freStore.
If a character does not exist in the map or its frequency is zero, I returned false, which means it is not an anagram.

If the character exists, I reduced its frequency count.

At the end, if all characters are processed without any mismatch, it means t is an anagram of s.

## Time and Space Complexity

**Time Complexity** : O(n);

**Space Complexity**: O(1) only 26 charcter so.

**[Code](./solution.js)**

**By vikas singh**
