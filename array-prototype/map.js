function map(arr, fn) {
    const newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = fn(arr[i]);
    }
    
    return newArr;
}

module.exports = map;
