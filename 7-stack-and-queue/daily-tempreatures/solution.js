var dailyTemperatures = function (arr) {
  // optimize way

  let stack = [];

  let res = new Array(arr.length).fill(0);

  for (let i = arr.length - 1; i >= 0; i--) {
    let current = arr[i];

    while (stack.length) {
      if (current < stack[stack.length - 1].val) {
        res[i] = stack[stack.length - 1].index - i;
        break;
      } else {
        stack.pop();
      }
    }

    stack.push({
      val: arr[i],
      index: i,
    });
  }

  return res;
};
