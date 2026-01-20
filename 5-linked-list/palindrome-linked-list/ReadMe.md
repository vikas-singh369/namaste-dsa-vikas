# Palindrome Linked List
[Link](https://leetcode.com/problems/palindrome-linked-list/description/)

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.


Example: Input: head = [1,2,2,1]
Output: true

## Approach 1 Convert to the array and check palindrome and return

- 1 traverse the List and push the all value to the Array list
- 2 find mid value
- 3 loop the array check using two pointer approach check the first and last value 
- 4 if value not same return false (not palindrome) otherwise return true (palindrome)


## Time and Space Complexity
**Time-Complexity** : O(n)
**Space-Complexity** : O(n) - using extra space

[Code](./solution.js)



## Approach 2: More optimized way not using the extra space

1. Find the middle Node of the Linked list.
2. Based on the middle Node list Reverse the second half of the Linked List.
3. Now we have two linked List reference one is head and second one is the reverse one.
4. check fistList value to the secondList value if it is not equal then return false (not palindrome) otherwise (palindrome).


```
<!-- find mid -->

slow = fast = head;

while(fast && fast.next){
  slow = slow.next;
  fast = fast.next.next;
}
```

```
<!-- reverse the second half list -->
prev = null;
curr = slow;

while(curr){
  temp = curr.next;
  curr.next = prev;
  prev = curr;
  curr = temp;
}
```

```
fist = head, second = prev;

while(second){
  if(first.val !=second.val){
    return false;
  }
  first = first.next;
  second = second.next;
}
return true
```

## Time and Space Complexity
**Time-Complexity:** O(n)
**Space-Complexity:** O(1)

[Code](./solution2.js)

**By vikas singh**