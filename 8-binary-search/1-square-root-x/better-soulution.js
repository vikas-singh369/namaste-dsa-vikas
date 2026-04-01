var mySqrt = function (x) {
  if (x < 2) {
    return x;
  }

  let left = 2;
  let right = Math.trunc(x / 2);

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (mid * mid === x) {
      return mid;
    } else if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return right;
};
