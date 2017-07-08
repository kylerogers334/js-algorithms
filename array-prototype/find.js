function find(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true) return arr[i];
    }
    
    return undefined;
}

module.exports = find;
