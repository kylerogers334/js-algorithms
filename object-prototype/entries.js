function entries(obj) {
    const arr = [];
    
    for (let i in obj) {
        arr.push([i, obj[i]]);
    }
    
    return arr;
}

module.exports = entries;
