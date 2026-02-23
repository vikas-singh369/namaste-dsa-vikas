var canConstruct = function (ransomNote, magazine) {
  // mangazine frequency map
  let magStore = {};

  for (let i = 0; i < magazine.length; i++) {
    if (!magStore[magazine[i]]) {
      magStore[magazine[i]] = 1;
    } else {
      magStore[magazine[i]]++;
    }
  }

  // check in ransomNote
  for (let i = 0; i < ransomNote.length; i++) {
    if (!magStore[ransomNote[i]]) {
      return false;
    } else {
      magStore[ransomNote[i]]--;
    }
  }

  return true;
};
