function concat() {
    let concatenatedArray = [];
    
    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arguments[i].length; j++) {
            concatenatedArray[concatenatedArray.length] = arguments[i][j];
        }
    }
    
    return concatenatedArray;
}

module.exports = concat;