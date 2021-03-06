function sin(n) {
    let x = n;
    function factorial(f) {
        for (let i = f - 1; i > 0; i--) {
            f *= i;
        }
        return f;
    }
    
    let sign = '-';
    /* 9 iteration taylor series is enough to converge in almost all situations */
    for (let i = 3; i <= 19; i += 2) {
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

module.exports = sin;
