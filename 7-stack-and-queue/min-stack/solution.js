var MinStack = function () {
  this.s = [];
  this.min = Infinity;
};
MinStack.prototype.push = function (val) {
  if (this.min > val) {
    this.s.push({ val, min: val });
    this.min = val;
  } else {
    this.s.push({ val, min: this.min });
  }
};

MinStack.prototype.pop = function () {
  let popElemnt = this.s.pop();

  this.min = this.s[this.s.length - 1]?.min
    ? this.s[this.s.length - 1].min
    : Infinity;

  return popElemnt.val;
};

MinStack.prototype.top = function () {
  let topElement = this.s[this.s.length - 1].val;

  return topElement;
};

MinStack.prototype.getMin = function () {
  let minValue = this.s[this.s.length - 1].min;
  return minValue;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
