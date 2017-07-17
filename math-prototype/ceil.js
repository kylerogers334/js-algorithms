function ceil(n) {
    n = String(n).split('.')[0];
    if (n[0] === "-") {
        return Number(n);
    }
    
    return Number(n) + 1;
}

module.exports = ceil;
