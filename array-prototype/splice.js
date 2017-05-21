function splice(arr, start, stop) {
    const newArr = [];
    
    let j = 0;
    for (let i = start; i < stop; i++) {
        newArr[j] = arr[i];
        arr[i] = "remove";
        j++;
    }
    
    const updatedArr = [];
    j = 0;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] !== "remove") {
            updatedArr[j] = arr[i];
            j++;
        }
    }

    return newArr;
}

const myArray = [1,2,3,4,5];
console.log(splice(myArray, 0, 3));
console.log(myArray);