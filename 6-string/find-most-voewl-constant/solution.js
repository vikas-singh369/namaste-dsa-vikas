var maxFreqSum = function (s) {
  // frequency map
  let map = {};

  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }

  // count maxVowels and maxConstant
  let maxVowels = 0;
  let maxConstant = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      if (map[s[i]] > maxVowels) {
        maxVowels = map[s[i]];
      }
    } else {
      if (map[s[i]] > maxConstant) {
        maxConstant = map[s[i]];
      }
    }
  }

  return maxVowels + maxConstant;
};