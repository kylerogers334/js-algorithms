function bubbleSort(arr) {
    for (let n = 0; n < arr.length; n++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                const swap = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = swap;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([9,2,4,5,1,0,3,8,7,6]));

function bubbleSortReverse(arr) {
    for (let n = 0; n < arr.length; n++) {
        for (let i = n; i > 0; i--) {
            if (arr[i] > arr[i - 1]) {
                const swap = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = swap;
            }
        }
    }
    return arr;
}

console.log(bubbleSortReverse([9,2,4,5,1,0,3,8,7,6]));