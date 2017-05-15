function includes(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) return true;
    }
    
    return false;
}

const arr = [1,2,3,4,5];

console.log("5 returns", includes(arr, 5));
console.log("6 returns", includes(arr, 6));
