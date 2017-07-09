function keys(obj) {
    const arr = [];
    
    for (let i in obj) {
        arr.push(i);
    }
    
    return arr;
}

module.exports = keys;
