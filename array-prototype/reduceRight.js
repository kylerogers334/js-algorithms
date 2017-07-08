function reduceRight(arr, fn, startingValue) {
    let i = arr.length - 1; 
    let value;

    if (startingValue) {
        value = startingValue;
    } else {
        value = arr[i];
        i--;
    }

    while (i >= 0) {
        value = fn(value, arr[i]);
        i--;
    }
    
    return value;
}

module.exports = reduceRight;
