var removeOuterParentheses = function (s) {
  let stack = [s[0]];
  let ans = "";

  for (let i = 1; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
      if (stack.length > 1) {
        ans = ans + s[i];
      }
    } else {
      if (stack.length > 1) {
        ans = ans + s[i];
      }
      stack.pop();
    }
  }
  return ans;
};
