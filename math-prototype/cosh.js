function cosh(x) {
    function factorial(f) {
        for (let i = f - 1; i > 0; i--) {
            f *= i;
        }
        return f;
    }
    let n = 1 ;
    /* 25 iteration taylor series is accurate for practical use cases */
    for (let i = 2; i <= 50; i += 2) {
        n += Math.pow(x, (i)) / factorial(i);
    }
    return n;
}

console.log(cosh(-1.0002345));
console.log(Math.cosh(-1.0002345));