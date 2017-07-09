function assign() {
    const target = arguments[0];
    
    for (let i = 1; i < arguments.length; i++) {
        for (let j in arguments[i]) {
            target[j] = arguments[i][j];
        }
    }
    
    return target;
}

module.exports = assign;
