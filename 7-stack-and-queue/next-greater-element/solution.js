var nextGreaterElement = function (nums1, arr) {
  let stack = [];
  let map = new Map();

  let n = arr.length - 1;

  for (let i = n; i >= 0; i--) {
    while (stack.length) {
      if (arr[i] < stack.at(-1)) {
        map.set(arr[i], stack.at(-1));
        break;
      } else {
        stack.pop();
      }
    }

    if (stack.length === 0) {
      map.set(arr[i], -1);
    }

    stack.push(arr[i]);
  }

  return nums1.map((num) => map.get(num));
};
