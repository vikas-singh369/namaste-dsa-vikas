var balancedStringSplit = function (s) {
  let rCount = 0;
  let lCount = 0;
  let maxNumber = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      rCount++;
    } else {
      lCount++;
    }

    if (rCount === lCount) {
      maxNumber++;
    }
  }
  return maxNumber;
};
