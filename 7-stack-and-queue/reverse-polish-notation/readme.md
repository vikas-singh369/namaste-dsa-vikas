# Evaluate Reverse Polish Notation

Leetcode problem 150

You are given an array of tokens representing an expression in Reverse Polish Notation.

Evaluate the expression and return the result.

Valid operators are +, -, \*, and /. Each operand may be an integer.

---

## Problem

Evaluate the value of an arithmetic expression in Reverse Polish Notation.

---

## Approach

This problem is solved using a stack.

- Initialize:
  - stack = [] to store operands
  - operators = map of functions:
    - "+" -> (a, b) => a + b
    - "-" -> (a, b) => a - b
    - "_" -> (a, b) => a _ b
    - "/" -> (a, b) => truncate(a / b)

- Traverse each token in the input array:
  - If token is an operator:
    - Pop top two values from stack
      - second = stack.pop()
      - first = stack.pop()
    - Apply operator function: operators[token](first, second)
    - Push result back to stack

  - If token is a number:
    - Push it into stack

- Final result:
  - Pop the last element from stack and return it as number

---

## video Explanation: [Link](https://youtube.com/shorts/qc5HRb0a2kU?si=qukYiHqs4DsOoa1s)

## Why This Works

- Reverse Polish Notation eliminates the need for parentheses
- Stack ensures correct order of operations
- We always evaluate when an operator appears

---

## What I Learned

- Stack is ideal for expression evaluation problems
- Order of popping matters (first and second operand)
- Using a map for operators keeps code clean and readable

---

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)

---

## Code Link

[Code](./solution.js)

---

By vikas singh
