# Baseball Game

{Leetcode problem no. 682}

You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

An integer x.
Record a new score of x.
'+'.
Record a new score that is the sum of the previous two scores.
'D'.
Record a new score that is the double of the previous score.
'C'.
Invalidate the previous score, removing it from the record.
Return the sum of all the scores on the record after applying all the operations.

## Approach

my approach is very straight forword question give the clearly instruction and i follow that

i used **Stack** to keep track of valid scores

- Integer -> convert to number and push to stack
- "C" -> pop out the last element
- "D" -> Double the last element and push
- "+" -> used previous two element and sum the value and push it into stack

at the ent finally return the sum of all scores.

## Complexity

- **Time Complexity**: O(n)
- **Space Complexity**: O(n)

**[Code](./solution.js)**

## key learning

- Stack is useful when we need quick access to last elements.
- `array.at(-1)` is a clean way to access last element.

**By vikas singh**
