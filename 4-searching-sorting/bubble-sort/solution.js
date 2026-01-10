const arr = [10, 14, 28, 11, 7, 16, 30, 50, 25, 18];

const bubbleSort = (arr) => {

    let isSwaped = false;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwaped = true;
            }
        }

        if (!isSwaped) break;
    }

    return arr;
}

console.log(bubbleSort(arr));