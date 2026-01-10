Fibonacci Number

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

## Approach

using recursion to solve this problem by calling itself on smaller sub problem

calling fib function to

what is the value of fib(n-1) and
what is the value of fib(n-2)

calculate the both value and return it.

edge case if n = 0 then return 0 if 1 then return 1

## Time and Spce Complexity

- **Time Complexity:** O(2\*\*n) -
- **Space Complexity:** O(n) - due to recursive stack.

[Code](./solution.js)

**By vikas singh**
