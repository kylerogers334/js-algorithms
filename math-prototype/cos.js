function cos(n) {
    let x = n;
    function factorial(f) {
        for (let i = f - 1; i > 0; i--) {
            f *= i;
        }
        return f;
    }
    let first = true;
    let sign = "-";
    /* 9 iteration taylor series is enough to converge in almost all situations */
    for (let i = 2; i <= 18; i += 2) {
        if (first) {
            n = 1 - Math.pow(x, i) / factorial(i);
            first = false;
            continue;
        } else if (sign === "-") {
            n -= Math.pow(x, i) / factorial(i);
            sign = "+";
        } else {
            n += Math.pow(x, i) / factorial(i);
            sign = "-";
        }
    }
    return n;
}

console.log(cos(-0.12345));
console.log(Math.cos(-0.12345));