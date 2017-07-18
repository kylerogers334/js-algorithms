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

module.exports = { bubbleSort, bubbleSortReverse };
