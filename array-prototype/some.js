function some(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true) return true;
    }
    
    return false;
}

module.exports = some;
