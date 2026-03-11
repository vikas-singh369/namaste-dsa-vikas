# Min Stack

{Leetcode problem 155}

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

## Problem

Design a stack that supports push, pop, top, and retrieving
the minimum element in O(1) time.

## Approach

The trick is to store the current minimum **along with each value**
as an object `{ val, min }` when pushing onto the stack.

- Initialized `this.min = Infinity` as default
- On `push`: I compare incoming value with `this.min`
  - If smaller → I update `this.min` and push `{ val, min: val }`
  - Else → push `{ val, min: this.min }` (carry forward current min)
- On `pop`: after popping, update `this.min` from the new top element
- On `getMin`: simply return `this.s[last].min` → always O(1)

## Why This Works

Every element "remembers" what the minimum was at the time
it was pushed. So even after popping, the previous minimum
is automatically restored.

## What I Learned

- Instead of maintaining a separate min-tracker stack,
  embedding min inside each node is cleaner
- `this.min = Infinity` is a smart default for comparison

## Complexity

- **Time Complexity**: O(1) for all operations
- **Space Complexity**: O(n) — each element stores extra min value

#### **[Code-Link](./solution.js)**

**By vikas singh**
