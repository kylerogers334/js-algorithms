function acosh(n) {
    if (n < 1) return NaN;
    
    return Math.log(n + Math.sqrt(n * n - 1));
}

module.exports = acosh;
