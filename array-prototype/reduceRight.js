function add(a, b) {
    return a + b;
}

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

console.log(reduceRight(["a", "b", "c", "d", "e"], add, 2));