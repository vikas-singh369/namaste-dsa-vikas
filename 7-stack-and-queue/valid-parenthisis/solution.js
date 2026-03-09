var isValid = function (s) {
  let parMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (parMap[s[i]]) {
      stack.push(s[i]);
    } else {
      let popElenent = stack.pop();

      if (!popElenent || parMap[popElenent] !== s[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};