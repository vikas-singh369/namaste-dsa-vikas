# Isomorphic Strings

{Leetcode - 205.}

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"

Output: true

Explanation:

The strings s and t can be made identical by:

Mapping 'e' to 'a'.
Mapping 'g' to 'd'.

## Approach

Approach is to create to map one for `mapStoT` and second for `mapTtos`.

and run a loop any of the string and check if both map not have that particular diraction mapping then create and store it

`mapStoT[s[i]] = t[i]` and `mapTtoS[t[i]] = s[i]`

and also check if any of the char mapping to char means its not isomorphic same for the other direction

`mapStoT[s[i]] !== t[i]` and `mapTtoS[t[i]] !== s[i]` then return `false`

other wise continue and at the end if all char are mapped both direction it means s and t are isomorphic string return `true`

**[Code](./solution.js)**

## Time and Space Complexity

**Time Complexity** : O(n) length of the string;
**Space Complexity**: O(1) no extra space.

**By vikas singh**
