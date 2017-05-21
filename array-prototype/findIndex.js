function findIndex(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true) return i;
    }
    
    return -1;
}

console.log(findIndex([2, 5, 8, 1, 4], x => { return x > 10; }));  // -1
console.log(findIndex([2, 5, 18, 1, 14], x => { return x > 10; }));  // 2
