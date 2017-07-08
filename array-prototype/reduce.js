function reduce(arr, fn, startingValue) {
    const len = arr.length;
    let i = 0; 
    let value;

    if (startingValue) {
        value = startingValue;
    } else {
        value = arr[i];
        i++;
    }

    while (i < len) {
        value = fn(value, arr[i]);
        i++;
    }
    
    return value;
}

module.exports = reduce;
