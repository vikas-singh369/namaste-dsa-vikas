# Ransom Note

{Leetcode - 383.}

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false

## Approach

approach is to check whether we can construct the ransomNote string using characters from the magazine string.

for that I used a `magStore = {}` frequency map.

First, I counted the frequency of each character in the `magazine`.

Then I traversed the `ransomNote` string.
If a character is not available or its count becomes zero, I returned `false`.

Otherwise, I decreased its frequency.

If all characters are matched, I returned `true`.

## Time and Space Complexity

**Time Complexity** : O(n)

**Space Complexity**: O(1) because its only 26 not grow so far.

**[Code](./solution.js)**

**By vikas singh**
