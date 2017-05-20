function every(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i])) return false;
    }
    
    return true;
}

console.log(every([1,2,3,"4",5], (x) => { return typeof x === "number" }));
console.log(every([1,2,3,4,5], (x) => { return x < 10 }));

