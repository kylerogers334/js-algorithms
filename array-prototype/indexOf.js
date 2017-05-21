function indexOf(arr, toFind) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === toFind) return i;
    }
    
    return -1;
}

var a = [2, 9, 9]; 
console.log(indexOf(a, 2)); // 0 
console.log(indexOf(a, 7)); // -1
