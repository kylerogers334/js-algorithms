function exp(x) {
    function factorial(f) {
        if (f === 0) return 1;
        for (let i = f - 1; i > 0; i--) {
            f *= i;
        }
        return f;
    }

    let sum = 0;
    for (let i = 0; i < 50; i++) {
        sum += (Math.pow(x, i)) / factorial(i);
    }
    
    return sum;
}

module.exports = exp;
