function isPowerOfThree(n) {
  if (n <= 0) {
    return false;
  }

  while (n > 1) {
    n = n / 2;
  }

  return n === 1;
}
