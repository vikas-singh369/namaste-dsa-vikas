# Reverse Vowels of a String

{Leetcode problem no. 345}

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:

Input: s = "IceCreAm"

Output: "AceCreIm"

Explanation:

The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

## Approach :

Using the two-pointer approach to solve this problem.

Since strings are immutable, I first convert the string into an array so I can modify it easily.

The first pointer starts at index 0, and the second pointer starts at the last index.

I move the first pointer forward until a vowel is found, and similarly move the second pointer backward until a vowel is found. When both pointers are pointing to vowels, I swap their values. This continues until both pointers meet or cross each other.

At the end, I convert the array back into a string and return the result.

## Time and Space Complexity

**Time Complexity** : O(n)
**Space Complexity**: O(n)

**[code](./solution.js)**

**By vikas singh**
