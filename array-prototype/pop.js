function pop(arr) {
    const last = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return last;
}

const x = [1,2,3,4,5]; // empty array inputs return undefined
console.log(pop(x), x);