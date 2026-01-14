const InsertionSort = (arr) => {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let curr = arr[i];
    let prev = i - 1;

    while (arr[prev] > curr && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }

    arr[prev + 1] = curr;
  }

  return arr;
};

const arr = [10, 14, 28, 11, 7, 16, 30, 50, 25, 18];

console.log(InsertionSort(arr));
