function floor(n) {
    n = String(n).split('.')[0];
    if (n[0] === "-") {
        return Number(n) - 1;
    }
    
    return Number(n);
}

module.exports = floor;
