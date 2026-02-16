# Reverse String II

{Leetcode problem no. 541}

Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

Example 1:

Input: s = "abcdefg", k = 2
Output: "bacdfeg"

## Approach:

Since strings are immutable,
I first converted the string into an array so I could modify it.

loop through the string with step `2k` and for each block i only reversed the `k` character using simple reverse string (swapping) technique.

at the end convert back into string and return the result.

```
for(x =0; x<s.length; x = x+2*k){

  let n = k
  // find the mid of that we need to reverse
  for(i =0; i<mid; i++){

    // swap it
    swap(s[i+x], s[n+x-1-i]);
  }
}
```

## Time and Space Complexity

**Time Complexity** : O(n)
**Space Complexity**: O(n) else if it mutable then o(1);

**[code](./solution.js)**

**By vikas singh**
