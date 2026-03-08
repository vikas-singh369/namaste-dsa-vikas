var MyQueue = function () {
  this.s1 = [];
  this.s2 = [];
};
MyQueue.prototype.push = function (x) {
  this.s1.push(x);
};

MyQueue.prototype.pop = function () {
  // if my s2 empty then
  if (this.s2.length === 0) {
    let n = this.s1.length;

    while (n > 0) {
      this.s2.push(this.s1.pop());
      n--;
    }
  }

  let popElement = this.s2.pop();

  return popElement;
};

MyQueue.prototype.peek = function () {
  if (this.s2.length === 0) {
    let n = this.s1.length;

    while (n > 0) {
      this.s2.push(this.s1.pop());
      n--;
    }
  }

  let peekElement = this.s2[this.s2.length - 1];

  return peekElement;
};

MyQueue.prototype.empty = function () {
  return this.s1.length === 0 && this.s2.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
