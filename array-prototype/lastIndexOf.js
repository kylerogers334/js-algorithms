function lastIndexOf(arr, toFind) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === toFind) return i;
    }
    
    return -1;
}

var a = [2, 5, 9, 2];
console.log(lastIndexOf(a, 2)); // 3
console.log(lastIndexOf(a, 7)); // -1
