// INCOMPLETE

function concat() {
    let concatenatedArray = [];
    
    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arguments[i].length; j++) {
            concatenatedArray.push(arguments[i][j]);
        }
    }
    
    return concatenatedArray;
}

console.log(concat([1,2,3],[4,5,6],[7,8,9]));