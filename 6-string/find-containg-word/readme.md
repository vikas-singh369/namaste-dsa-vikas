# Find Words Containing Character

You are given a 0-indexed array of strings words and a character x.

Return an array of indices representing the words that contain the character x.

Note that the returned array may be in any order.

Example 1:

Input: words = ["leet","code"], x = "e"
Output: [0,1]
Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.

# Approach

approach is simple run 2 loop one for outer for array and inner loop where we check inner loop each word that conatin that particular `x` value or not if contain then push there index value to the `res` array and at the end return that result array.

## Time and Space Complexity

**Time Complexity** : O(n)
**Space Complexity**: O(1) constant extra space (excluding result array).

**[Code](./solution.js)**

**By vikas singh**
