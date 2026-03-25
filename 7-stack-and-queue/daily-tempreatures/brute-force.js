var dailyTemperatures = function (arr) {
  // brute force

  let res = new Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > current) {
        res[i] = j - i;
        break;
      }
    }
  }

  return res;
};
