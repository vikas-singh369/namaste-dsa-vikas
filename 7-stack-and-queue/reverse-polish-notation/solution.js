var evalRPN = function (arr) {
  let map = {
    "+": (a, b) => b + a,
    "-": (a, b) => b - a,
    "*": (a, b) => b * a,
    "/": (a, b) => Math.trunc(b / a),
  };

  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      let a = stack.pop();
      let b = stack.pop();

      let res = map[arr[i]](+a, +b);

      stack.push(res);
    } else {
      stack.push(+arr[i]);
    }
  }

  return Math.trunc(stack.pop());
};
