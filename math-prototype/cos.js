function cos(x) {
    function factorial(f) {
        for (let i = f - 1; i > 0; i--) {
            f *= i;
        }
        return f;
    }
    let n = 1 - Math.pow(x, 2) / 2;
    let sign = '+';
    
    /* 9 iteration taylor series is enough to converge in almost all situations */
    for (let i = 4; i <= 18; i += 2) {
        if (sign === '-') {
            n -= Math.pow(x, i) / factorial(i);
            sign = '+';
        } else {
            n += Math.pow(x, i) / factorial(i);
            sign = '-';
        }
    }
    return n;
}

module.exports = cos;
