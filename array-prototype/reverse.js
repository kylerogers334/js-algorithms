function reverse(arr) {
    const arrCopy = [];
    for (let i = 0; i < arr.length; i++) {
        arrCopy[i] = arr[i];
    }
    
    let j = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[j] = arrCopy[i];
        j++;
    }
    arr = arrCopy;
}

const arr = [1,2,7,4,5];
reverse(arr);
console.log(arr);