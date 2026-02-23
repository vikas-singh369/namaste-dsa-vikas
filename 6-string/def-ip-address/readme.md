# Defanging an IP Address

{Leetcode problem no. 1108}

Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"

## Approach :

my approach is very simple using a in build string function `replaceAll()` and replace `.` all with `[.]`.

## Time and Space Complexity

**Time Complexity** : O(n)

**Space Complexity**: O(1)

**[Code](./solution.js)**

**By vikas singh**
