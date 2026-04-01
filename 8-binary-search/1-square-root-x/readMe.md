# Square x
[Link](https://leetcode.com/problems/sqrtx/description/)

Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x \*\* 0.5 in python.

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.

## Approach : -

simple brute force approach `x` already provided i run loop 2 to x and double each value and check given value if match then return if my double value is greater then given value i simply return the privious value `i - 1`;

**[Code](./solution.js)**

But it's not a good approach its take lots of time to find and time complexity is O(n).

## Approach - Optimize approach

to find the nearest and exact square of number `x`, I used binary search for efficient computation.

I initialized two pointers, `left` and `right`. left starts at 2, and right is set to x / 2 because any square root of x must lie between `2` and `x / 2` for values greater than 2.

```
loop {

  find the middle value = > m

  If m * m === x, return m.
  If m * m > x, search left side.
  If m * m < x, search right side.
}

at the end if left right cross  then Return right value, right contains the nearest number squage for the given  number.

```

**[Code](./better-soulution.js)**

### Time and Space Complexity

**Time-Complexity** : O (logn) - much better
**Space-Complexity** : O(1);
