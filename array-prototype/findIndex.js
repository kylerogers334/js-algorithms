function findIndex(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true) return i;
    }
    
    return -1;
}

module.exports = findIndex;
