# Longest Common Prefix

{Leetcode - 14}

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

## Approach:

To solve this, I compared characters one by one.

I used the first string as a reference and checked each character index.

For every position, I compared that character with the same position in all other strings.

If any character didn’t match, or any string ended there, I returned the prefix found so far.

If all characters matched, I moved to the next position.

If no mismatch was found till the end, I returned the whole first string as the longest common prefix.

```
x = 0;

loop( x < s[0].length){
  let char = s[0][x];

  for( let i =1; i< s.length ; i++){
    if( char !== s[i][x] || x === s[i].length){
      return s[0].substring( 0, x);
    }
  }
  x++;
}
return s[0];
```

### Time And Space Complexity

**Time Complexity:**
O(n × m)
Where n is the number of strings and m is the length of the first string.
For each character of the first string, we compare it with all other strings.

**Space Complexity:**
O(1)
Because we are not using any extra data structure. We are only using a few variables.

**[Code](./solution.js)**

**By vikas singh**
