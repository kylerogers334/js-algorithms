function shift(arr) {
    if (arr.length === 0) return undefined;
    
    const firstItem = arr[0];
    const copyArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        copyArray[i] = arr[i];
    }
    
    for (let i = 0; i < arr.length; i++) {
        arr[i] = copyArray[i + 1];
    }
    
    arr.length = arr.length - 1;
    
    return firstItem;
}

const myArray = ["a", "b", "c", "d"];

console.log(shift(myArray));
console.log(myArray);






// var a = [1, 2, 3];
// var b = a.shift();

// console.log(a); // [2, 3]
// console.log(b); // 1