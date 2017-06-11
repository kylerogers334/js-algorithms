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
        sum += (x ** i) / factorial(i);
    }
    
    return sum;
}

console.log(exp(-2/3));
console.log(Math.exp(-2/3));
console.log(exp(0));
console.log(Math.exp(0));
console.log(exp(-2));
console.log(Math.exp(-2));
console.log(exp(11));
console.log(Math.exp(11));
