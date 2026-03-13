var removeOuterParentheses = function (s) {
  let level = 0;
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      ++level;
      if (level > 1) {
        ans = ans + s[i];
      }
    } else {
      if (level > 1) {
        ans = ans + s[i];
      }
      --level;
    }
  }

  return ans;
};
