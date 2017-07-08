function indexOf(arr, toFind) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === toFind) return i;
    }
    
    return -1;
}

module.exports = indexOf;
