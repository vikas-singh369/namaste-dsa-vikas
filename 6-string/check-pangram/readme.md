# Check if the Sentence Is Pangram

{Leetcode - 1832.}

A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.

## Approach:

we check whether a string contains all 26 English letters or not if contains that means given string is Pangram if not means not a Pangram.

so I used a Set to store unique characters.

at the end after traverse the whole sentence chars, If the size of the Set becomes 26, it means all letters are present. if below 26 so not present based on that i return my result.

## Time and Space Complexity

**Time Complexity** : O(n)

**Space Complexity**: O(1) because its only 26 not grow so far.

**[Code](./solution.js)**

**By vikas singh**
