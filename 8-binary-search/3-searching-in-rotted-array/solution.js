var search = function (arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let m = left + Math.floor((right - left) / 2);

    if (arr[m] === target) {
      return m;
    }

    //left is sorted
    if (arr[left] <= arr[m]) {
      if (arr[left] <= target && target < arr[m]) {
        right = m - 1;
      } else {
        left = m + 1;
      }
    } else {
      //right is sorted
      if (arr[m] < target && target <= arr[right]) {
        left = m + 1;
      } else {
        right = m - 1;
      }
    }
  }

  return -1;
};
