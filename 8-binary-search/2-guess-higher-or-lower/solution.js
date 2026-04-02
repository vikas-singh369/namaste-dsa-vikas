var guessNumber = function (n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    let m = left + Math.floor((right - left) / 2);

    let res = guess(m);

    if (res === 0) {
      return m;
    } else if (res > 0) {
      left = m + 1;
    } else {
      right = m - 1;
    }
  }
};
