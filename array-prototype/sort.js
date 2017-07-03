function bubbleSort(arr, compareFn) {
    if (!compareFn) { 
        // sort lowest to highest by default
        compareFn = function(a, b) { return a - b };
    }

    for (let n = 0; n < arr.length; n++) {
        for (let i = 0; i < arr.length; i++) {
            if (compareFn(arr[i] > arr[i + 1]) < 0) {
                const swap = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = swap;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([9,2,4,5,1,0,3,8,7,6]));