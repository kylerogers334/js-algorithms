function acos(x) {
    if (x > 1 || x < -1) return NaN;
    function factorial(f) {
        if (f === 0) return 1;
        for (let i = f - 1; i > 0; i--) {
            f *= i;
        }
        return f;
    }

    let n = Math.abs(x);
    let sum = 0;

    for (let i = 0; i < 86; i++) {
        sum += ((factorial(2 * i)
            * Math.pow(n, (2 * i + 1)))
            / (Math.pow(4, i) * Math.pow(factorial(i), 2) * (2 * i + 1)));
    }

    return x < 0 ? -(Math.PI/2 - sum) : Math.PI/2 -sum;
}

module.exports = acos;
