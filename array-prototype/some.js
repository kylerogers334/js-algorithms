function some(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true) return true;
    }
    
    return false;
}

console.log(some([2, 5, 8, 1, 4], x => { return x > 10; }));  // false
console.log(some([2, 5, 8, 1, 14], x => { return x > 10; }));  // true
