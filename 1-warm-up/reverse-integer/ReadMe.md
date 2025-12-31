## problem statement
Write a function reverse(x) that takes a 32-bit signed integer and returns its digits reversed. If the reversed value overflows the 32-bit signed integer range, return 0 [link](https://leetcode.com/problems/reverse-integer/description/) 

Example:
- Input: x = 123
- Output: 321
- Input: x = -123
- Output: -321


## Approach 
my approach is to reverse the number 
1. store the originaland create the copy of original value: save xCopy =  `original`
2. absolute the value of xCopy `xCopy = Math.abs(xCopy)` because i want to handle negative numbers by converting them into positive, and after reversing the number i will restore the sign.

3. reverse 
```
initilize rev = 0;

while(x>0){
  let rem = x % 10;
  rev = (rev*10) + rem
  x = x/10
}

4. restore the sign if rev = original < 0? : -rev : rev

limit = 2^31 

if(rev > limit - 1  || rev < -(limit) ) return 0

5.  return rev
```

[Code](./solution.js)

**By vikas singh**
