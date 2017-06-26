function keys(obj) {
    const arr = [];
    
    for (let i in obj) {
        arr.push(i);
    }
    
    return arr;
}

console.log(keys({a: '1'}))