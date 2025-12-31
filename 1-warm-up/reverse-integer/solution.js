/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let xCopy = x;
  xCopy = Math.abs(xCopy);
  let rev = 0;
  let limit = 2 ** 31;

  while (xCopy > 0) {
    let rem = xCopy % 10;
    rev = rev * 10 + rem;
    xCopy = Math.floor(xCopy / 10);
  }

  // restore the sign
  rev = x > 0 ? rev : -rev;

  // limit check
  if (rev < -limit || rev > limit - 1) return 0;

  return rev;
};