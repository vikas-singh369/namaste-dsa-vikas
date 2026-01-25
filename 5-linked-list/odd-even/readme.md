# Odd Even Linked List

Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.

## Approach:

1 initilizing two pointr odd and even odd start from the string and the even start form the `head.next`;

2 store the even start point so at the end link to the odd.next;

3 rewaire the odd and even `odd.next = odd.next.next` and `even.next = even.next.next` and update or move the odd and even pointer their `next`

at the end connect the `odd.next` to the even start variable.

```
while( even && even.next){
odd.next = odd.next.next;
even.next = even.next.next;

odd = odd.next ;
even = even.next;
}
```

### Time and Spcae Complexity
**Time-Complexity** O(n)
**Space-Complexity** O(1)

[Code](./solution.js)


**By vikas singh**
