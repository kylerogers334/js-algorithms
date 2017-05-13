function filter(arr, fn) {
    const newArr = [];
    
    arr.forEach( item => {
        if (fn(item)) {
            newArr.push(item);
        }
    });
    
    return newArr;
}

console.log(
    filter([1,20,30,8,5], (n) => {
        return n > 10 === true; 
    })
);