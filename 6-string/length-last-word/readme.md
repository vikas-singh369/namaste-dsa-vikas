# Length of Last Word

(leet no. 58)

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

## Approach 1 :

using in built function
first `trim` the given string then `split` them and `pop` out last word and return length;

```
return s.trim().split(" ").pop().length;
```

## Time and Space Complexity

**Time Complexity** : O(n)
**Space Complexity**: O(n)

## Approach 2 :

without in built function

run a loop at the end of the string and check if char is not empty if not empty count until found the empty space again if empty space found breack the loop return the `count` value;

## Time and Space Complexity

**Time Complexity** : O(n)
**Space Complexity**: O(1)

**[Code](./solution.js)**

**By vikas singh**
