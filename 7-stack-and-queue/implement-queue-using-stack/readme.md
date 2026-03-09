# Implement Queue using Stacks

{Leetcode - 232.}

Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

## Approach

## Approach

- **My approach** is to use two stacks `(s1 and s2)` to implement queue behavior.  
  The idea is that `s1` is used for inserting elements, while `s2` is used when we need to access elements in **FIFO order**.  
  Whenever `pop()` or `peek()` is called and `s2` is empty, I transfer all elements from `s1` to `s2`.  
  This reverses the order so the earliest inserted element appears on top of `s2`.

---

### Push Operation

- Whenever I want to push a value, I simply push it into the first stack `s1`.

---

### Pop Operation

- If `s2` is empty, I transfer all elements from `s1` to `s2`.
- This reversal makes the oldest element come to the top of `s2`.
- Then I pop the top element from `s2` and return it.

---

### Peek Operation

- This works similarly to `pop()`.
- If `s2` is empty, I transfer all elements from `s1` to `s2`.
- Then I return the top element of `s2` **without removing it**.

---

### Empty Operation

- I check whether both stacks `s1` and `s2` are empty.
- If both are empty, the queue is empty and I return `true`.
- Otherwise, I return `false`.

[Code](./using-two-queue.js)

### Time and Space Complexity

**Time Complexity** :

- - push → O(1)

- - pop/top → O(n) in worst case otherwise O(1) in similar case.f

- - empty → O(1)

**Space-Complexity** : O (n) n is the number of element that we store in stack.

**By vikas singh**
