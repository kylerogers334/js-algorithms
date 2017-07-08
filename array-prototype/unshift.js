function unshift(arr) {
    const unshiftedArray = [];
    // first add the arguments to a new array
    for (let i = 1; i < arguments.length; i++) {
        unshiftedArray[i] = arguments[i];
    }
    // next add the original array
    const newLength = unshiftedArray.length + arr.length - 1;
    let j = 0;
    for (let i = unshiftedArray.length - 1; i < newLength; i++) {
        unshiftedArray[i] = arr[j];
        j++;
    }
    // lastly modify the original array
    for (let i = 0; i < newLength; i++) {
        arr[i] = unshiftedArray[i];
    }
    return newLength;
}

module.exports = unshift;
