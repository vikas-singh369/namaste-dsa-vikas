var isPowerOfFour = function (n) {
  if (n <= 0) {
    return false;
  }

  const logRes = Math.log10(n) / Math.log10(4);
  return Number.isInteger(logRes);
};
