var nextGreaterElements = function (arr) {
  let n = arr.length;
  let stack = [];
  let ans = new Array(n).fill(-1);

  for (let i = 2 * n - 2; i >= 0; i--) {
    while (stack.length) {
      if (arr[i % n] < stack.at(-1)) {
        ans[i % n] = stack.at(-1);
        break;
      } else {
        stack.pop();
      }
    }

    stack.push(arr[i % n]);
  }

  return ans;
};
