function values(obj) {
    const a = [];
    
    for (let i in obj) {
        a.push(obj[i]);
    }
    
    return a;
}

module.exports = values;
