function slice(arr, start=0, end) {
    if (start < 0) {
        start = start + arr.length;
    }
    
    if (end > arr.length || !end) {
        end = arr.length;
    }
    
    const slicedArr = [];
    let j = 0;
    for (let i = start; i < end; i++) {
        slicedArr[j] = arr[i];
        j++;
    }
    
    return slicedArr;
}

console.log(slice([1,2,3,4,5], 1, 5));