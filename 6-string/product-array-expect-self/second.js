var productExceptSelf = function (arr) {
  let length = arr.length;

  let leftArray = new Array(length).fill(1);
  let rightArray = new Array(length).fill(1);

  let temp = 1;
  for (let i = 0; i < length; i++) {
    leftArray[i] = temp;
    temp = temp * arr[i];
  }

  // right array
  temp = 1;
  for (let i = length - 1; i >= 0; i--) {
    rightArray[i] = temp;
    temp = temp * arr[i];
  }

  // multiply left and right
  let result = [];

  for (let i = 0; i < length; i++) {
    result[i] = leftArray[i] * rightArray[i];
  }

  return result;
};