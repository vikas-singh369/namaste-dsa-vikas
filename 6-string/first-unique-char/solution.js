var firstUniqChar = function (s) {
  // frequency map

  let freMap = {};

  for (let i = 0; i < s.length; i++) {
    if (!freMap[s[i]]) {
      freMap[s[i]] = 1;
    } else {
      freMap[s[i]]++;
    }
  }

  for (let j = 0; j < s.length; j++) {
    if (freMap[s[j]] === 1) {
      return j;
    }
  }

  return -1;
};
