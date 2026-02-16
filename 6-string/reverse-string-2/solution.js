var reverseStr = function (s, k) {
  s = s.split("");

  // jump every 2k characters
  for (let x = 0; x < s.length; x = x + 2 * k) {
    // reverse only the first k characters in this 2k block
    let n = k;
    let mid = Math.floor(n / 2);

    for (let i = 0; i < mid; i++) {
      // simple swap
      let temp = s[i + x];
      s[i + x] = s[x + n - 1 - i];
      s[x + n - 1 - i] = temp;
    }
  }

  return s.join("");
};
