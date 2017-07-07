function atan(x) {
    // cannot use a negative in the calculation,
    // but output must be same sign as input
    let negative;
    if (x < 0) {
        negative = -1;
    }
    
    x = Math.abs(x);
    let n = 0;

    for (let i = 0; i < 99; i++) {
        n += (Math.pow(-1, i) * Math.pow(x, (2 * i + 1))) / (2 * i + 1);
    }
    return (n * negative || n);
}
