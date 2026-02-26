var longestCommonPrefix = function (s) {
  let x = 0;

  while (x < s[0].length) {
    let char = s[0][x];

    // check for all remaining words
    for (let i = 1; i < s.length; i++) {
      if (char !== s[i][x] || x === s[i].length) {
        return s[0].substring(0, x);
      }
    }
    x++;
  }
  return s[0];
};
