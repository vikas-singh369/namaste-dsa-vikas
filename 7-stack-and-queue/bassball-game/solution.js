var calPoints = function (operations) {
  let stack = [];

  for (const op of operations) {
    if (op === "C") {
      stack.pop();
    } else if (op === "D") {
      let double = stack.at(-1) * 2;
      stack.push(double);
    } else if (op === "+") {
      stack.push(stack.at(-1) + stack.at(-2));
    } else {
      stack.push(Number(op));
    }
  }

  // sum of all score
  let sum = stack.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return sum;
};
