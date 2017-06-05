function sinh(n) {
    let x = n;
    function factorial(f) {
        for (let i = f - 1; i > 0; i--) {
            f *= i;
        }
        return f;
    }

    /* 9 iteration taylor series is enough to converge in almost all situations */
    for (let i = 3; i <= 19; i += 2) {
        n += Math.pow(x, i) / factorial(i);
    }
    return n;
}

console.log(sinh(-0.12345));
console.log(Math.sinh(-0.12345));