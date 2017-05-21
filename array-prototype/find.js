function find(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true) return arr[i];
    }
    
    return undefined;
}

console.log(find([2, 5, 8, 1, 4], x => { return x > 10; }));  // undefined
console.log(find([2, 5, 18, 1, 14], x => { return x > 10; }));  // 18
