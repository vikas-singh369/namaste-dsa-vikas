# Valid Palindrome

{Leetcode problem no. 125}

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

## Approach:

To handle both uppercase and lowercase characters, I first convert the entire string to lowercase.

Then I use the two-pointer approach.
The first pointer `i` starts from index 0, and the second pointer `j` starts from the last index of the string.

While traversing, if either pointer points to a non-alphanumeric character, I skip it and move the pointer forward (or backward for the second pointer).

When both pointers point to alphanumeric characters, I compare them using s[i] === s[j].
If they match, I move both pointers forward.
If they do not match, I return false.

If the loop completes without any mismatch, I return true, which means the string is a valid palindrome.

## Time and Space Complexity

**Time Complexity** : O(n)
**Space Complexity**: O(1) no extra space used.

**[code](./solution.js)**

**By vikas singh**
