# Find Most Frequent Vowel and Consonant

{ Leetcode - 3541.}

You are given a string s consisting of lowercase English letters ('a' to 'z').

Your task is to:

Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
Find the consonant (all other letters excluding vowels) with the maximum frequency.
Return the sum of the two frequencies.

Note: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. If there are no vowels or no consonants in the string, consider their frequency as 0.

The frequency of a letter x is the number of times it occurs in the string.

Example 1:

Input: s = "successes"

Output: 6

Explanation:

The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
The output is 2 + 4 = 6.

## Approach :

To solve this problem, I first traversed the string and used a frequency map `map` to count the occurrence of each character.

after that I traversed loop again and checked whether the character is a vowel (a, e, i, o, u) or a consonant based on that I maintained two variables:

One to track the maximum frequency vowel `maxVowels`

One to track the maximum frequency consonant `maxConstant`

After completing the traversal, I returned the sum of most frequent vowel and consonant.

### Time and Space Complexity

**Time Complexity:** O(n)
(We traverse the string once.)

**Space Complexity:** O(k)
(Where k is the number of unique characters stored in the map.)

**[Code](./solution.js)**

**By vikas singh**
