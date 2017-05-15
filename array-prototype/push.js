function push(arr, item) {
    arr[arr.length] = item;
    return arr.length;
}

const arr = [1,2,3,4,5];

console.log(push(arr, 6), arr);