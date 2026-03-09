# Valid Parentheses

{Leetcode 20.}

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()"

Output: true

## Approach

My approach is to used stack to solve this problem and tracks all the opening brackets.

create a map that stores matching pairs `map = {
  {:},
  (:),
  [:]
  }`

Traverse the string:

Opening bracket → push to stack
Closing bracket → pop from stack, check if `map[popped] === current`

match → `continue`
no match → `return false`

After full traversal:

Stack empty → `return true`
Stack not empty → `return false`

[Code](./solution.js)

### Time and Space complexity

**Time-Complexity** : O(n)

**Space-Complexity** : O (n) using stack.

**By vikas singh**
