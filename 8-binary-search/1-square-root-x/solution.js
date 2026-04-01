// brute force approach
var mySqrt = function (x) {
  if (x === 0) {
    return x;
  }

  for (let i = 1; i <= x; i++) {
    if (i ** 2 === x) {
      return i;
    } else if (x < i ** 2) {
      return i - 1;
    }
  }
};
