# Jewels and Stones
{Leetcode problem no. 771 }

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

# Approach :

using nested loop to check and count matches outer loop run for `stones` and inner loop run for `jewels` and check the each jewels to stones if match then count increse at the end return the `count` if not matches then count is initial `0` return;

**[Code](./solution.js)**

## Approach 2 :

used `set` to store all jewels character and loop through the stones and check set has that char value or not if has then count increment.

return the `count`;

**[Code](./optimize.js)**

## Time and Space Complexity

**Time Complexity** : O(m+n) m is stones length and n is jewels length;
**Space Complexity**: O(1) constant extra space.

**By vikas singh**
