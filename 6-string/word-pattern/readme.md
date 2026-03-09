# word pattern

{Leetcode - 290.}

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

Each letter in pattern maps to exactly one unique word in s.
Each unique word in s maps to exactly one letter in pattern.
No two letters map to the same word, and no two words map to the same letter.

## Approach :

My approach to solve the Word Pattern problem is similar to the idea used in Isomorphic Strings.

To solve this I create two maps. One map stores the mapping from character to word `charToWord = {}` and the second map stores the mapping from word to character `wordToChar = {}`.

Then I traverse the pattern and the words together. If the current character and word are not present in the maps, I add the mapping in both directions.

` charToWord[patten[i]] = wordToChar[words[i]]`

` wordToChar[words[i]] = charToWord[patten[i]]`

If they are already present, I check whether the existing mapping is correct or not.

If at any point the character is already mapped to a different word or the word is mapped to a different character, I return `false`.

If the traversal finishes and all mappings remain consistent, then I return `true`.

[Code](./solution.js)

### Time and Space complexity

**Time-Complexity** : O(n)

**Space-Complexity** : O (n).

**By vikas singh**
