# Group Anagrams

{Leetcode - 49}

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

## Approach:

To solve this, I used a hashmap approach.

I traversed the array, and for each word, I sorted its characters and used the sorted string as a key.

Then I checked the map.
If the key already existed, I pushed the word into the existing group.
If not, I created a new group with that word.

At the end, I returned all the grouped values from the map.

```
map = {};

loop(i =0; i<strs.length; i++){
  key = strs[i] -> sort() ;

  if( !map[key]){
    map[key] = [strs[i]];
  }else{
    map[key].push(strs[i]);
  }
}

return map.values();

```

**[Code](./solution.js)**

## Time and Space Complexity

**Time Complexity** : O(n k log k) n is length of array and k is length of word and k log k for sorting time.
**Space Complexity**: O(n) hashmap.

**By vikas singh**
