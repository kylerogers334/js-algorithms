function lastIndexOf(arr, toFind) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === toFind) return i;
    }
    
    return -1;
}

module.exports = lastIndexOf;
