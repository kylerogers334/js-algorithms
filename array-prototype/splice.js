function splice(arr, start, stop) {
    const newArr = [];

    let j = 0;
    for (let i = start; i < stop; i++) {
        newArr[j] = arr[i];
        delete arr[i];
        j++;
    }

    const updatedArr = [];
    j = 0;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined) {
            updatedArr[j] = arr[i];
            j++;
        }
    }

    return newArr;
}

module.exports = splice;