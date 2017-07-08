function filter(arr, fn) {
    const newArr = [];
    
    arr.forEach( item => {
        if (fn(item)) {
            newArr.push(item);
        }
    });
    
    return newArr;
}

module.exports = filter;
