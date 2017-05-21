function map(arr, fn) {
    const newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = fn(arr[i]);
    }
    
    return newArr;
}

const myArr = [1,2,3,4,5];
console.log(map(myArr, x => { return x*2; }));