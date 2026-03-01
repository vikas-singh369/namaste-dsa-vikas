var productExceptSelf = function (nums) {
  let n = nums.length;
  const result = new Array(n).fill(1);

  let temp = 1;
  for (let i = 0; i < n; i++) {
    result[i] = temp;
    temp = nums[i] * temp;
  }

  // calculate right side and the same time store result
  // re-write the temp old value
  temp = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] = result[i] * temp;
    temp = temp * nums[i];
  }

  // final result
  return result;
};
