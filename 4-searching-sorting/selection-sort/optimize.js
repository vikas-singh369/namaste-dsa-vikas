function SelectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min != i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  return arr;
}

const arr = [0, 5, 8, 3, 11, 4, 2, 1];

console.log(SelectionSort(arr));
