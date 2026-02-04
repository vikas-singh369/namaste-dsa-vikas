/** First Approach */
var lengthOfLastWord = function (s) {
  return s.trim().split(" ").pop().length;
};

/** second Approach */
var lengthOfLastWord = function (s) {
  let count = 0;
  let started = false;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] != " ") {
      started = true;
      count++;
    } else if (started) {
      break;
    } else {
      continue;
    }
  }

  return count;
};

