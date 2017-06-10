function atanh(x) {
    if (x === 1 || x === -1) {
        return x * Infinity;
    }
    if (x > 1 || x < -1) {
        return NaN;
    }
    // cannot use a negative in the calculation,
    // but output must be same sign as input
    if (x < 0) {
        var negative = -1;
    }
    
    x = Math.abs(x);
    let n = 0;
    
    for (let i = 0; i < 10000; i++) {
        n += (Math.pow(x, (2*i + 1)) / (2 * i + 1));
    }
    
    return (n * negative || n);
}

console.log(atanh(0.5));
console.log(Math.atanh(0.5));