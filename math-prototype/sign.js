function sign(n) {
    if (n === 0) return n; // works for both 0 and -0
    
    if (isNaN(n)) return NaN;
    
    return (n > 0) ? 1 : -1;
}

module.exports = sign;
