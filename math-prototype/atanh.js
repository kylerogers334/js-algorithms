function atanh(x) {
    if (x === 1 || x === -1) {
        return x * Infinity;
    }
    if (x > 1 || x < -1) {
        return NaN;
    }
    let n = 0;
    
    for (let i = 0; i < 10000; i++) {
        n += (Math.pow(Math.abs(x), (2 * i + 1)) / (2 * i + 1));
    }

    return x < 0 ? -n : n;
}

console.log(atanh(0.5));
console.log(Math.atanh(0.5));