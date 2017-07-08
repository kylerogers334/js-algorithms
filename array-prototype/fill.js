function fill(arr, value, start=0, end=arr.length) {
    if (start < 0) {
        start = arr.length + start;
    }
    
    if (end < 0) {
        end = arr.length + end;
    }
    
    for (start; start < end; start++) {
        arr[start] = value;
    }
    
    return arr;
}

module.exports = fill;
