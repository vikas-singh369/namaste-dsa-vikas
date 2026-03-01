var productExceptSelf = function (arr) {
  let ansArr = [];
  for (let i = 0; i < arr.length; i++) {
    let result = 1;

    for (let j = 0; j < arr.length; j++) {
      if (j === i) {
        continue;
      } else {
        result = arr[j] * result;
      }
    }

    ansArr[i] = result;
  }

  return ansArr;
};
