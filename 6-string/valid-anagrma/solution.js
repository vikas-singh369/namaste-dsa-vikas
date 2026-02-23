var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  // frequency store
  let freStore = {};

  for (let i = 0; i < s.length; i++) {
    if (!freStore[s[i]]) {
      freStore[s[i]] = 1;
    } else {
      freStore[s[i]]++;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!freStore[t[i]]) {
      return false;
    } else {
      freStore[t[i]]--;
    }
  }

  return true;
};
