## Implement Stack using Queues

Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

**[More Details](https://leetcode.com/problems/implement-stack-using-queues/description/)**

## Approach

- My approach is to create two queue `(q1 and q2)` and whenever i want to pop() or peek the element then queue pop the front value so i just shift all value to q2 and get that (length-1) value as ans to return same thing do it for the peek operation thats my approach.

- **push operation** : theb i just put the value first queue.

- **pop operation **: then i shift all the front pop value `(n-1)` time to `q2` and store the last front pop value and pop it out to the `q1` and exchange the `q1 to q2` so my main queue value should be accureate.

- **peek operation** : same operation as pop( ) but in the last not take `info of peek value` and push into `q2` and exchange the value.

- **empty operation** : i just check q1 if not emptly then `false` and if empty then `true`.

[Code](./using-two-queue.js)

### Time and Space Complexity

**Time Complexity** :

- - push → O(1)

- - pop/top → O(n)

- - empty → O(1)

**Space Complexity** :

O(n) Because the data structure maintains two queues that together store up to n elements.

## Approach 2 using one Queue

Approach is very simple instant using of two queue i just use one queue and rotate the value based on use case.

Suppose i want to pop value so i just pop out all ( n -1 ) front element into the queue and push back in the same queue and in the end pop() the front value because that is the last value of stack but we simulate stack using queue so we do that.

[Code](./using-one-queue.js)

### Time and Space complexity

**Time-Complexity** :

- - push() O(1)

- - Empty() O(1)

- - top()/peek() O(n)

**Space-Complexity** : O (n) n is the number of element that we store in queue.

**By vikas singh**