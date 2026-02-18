var isPalindrome = function (s) {
  // two pointer approach
  let i = 0;
  let j = s.length - 1;

  s = s.toLowerCase();

  while (i < j) {
    while (i < j && !/[a-z0-9]/.test(s[i])) {
      i++;
    }

    while (i < j && !/[a-z0-9]/.test(s[j])) {
      j--;
    }

    if (s[i] !== s[j]) {
      return false;
    }

    i++;
    j--;
  }
  return true;
};
