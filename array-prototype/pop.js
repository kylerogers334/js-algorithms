function pop(arr) {
    const last = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return last;
}

module.exports = pop;
