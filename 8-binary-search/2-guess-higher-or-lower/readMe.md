# Guess Number Higher or Lower [Link](https://leetcode.com/problems/guess-number-higher-or-lower/description/?envType=problem-list-v2&envId=ojh7c4n2)

We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked (the number I picked stays the same throughout the game).

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.

## Approach :

My approach is using binary search to find the pick number,

initilize the `left = 1` and `right = n` and calculate the `m` middle value and the problem statement already provide the `guess()` function API that take a number and response `0` `1` and `-1` based on that response i used to update my `left` and `right` value until i found the correct one.

- if function response `0` it means the given value is correct so return it `res === 0` return `m`;

- response is `-1` means the picked value is smaller so move left side

- response is `1` means the picked value is larger so move right side

```
loop {

  m = left + right / 2

  res = guess(m);

  if( res === 0) return m;
  else if ( res === -1 ) right = m -1;
  else left = m + 1
}
```

**[Code](./solution.js)**

**By vikas singh**
