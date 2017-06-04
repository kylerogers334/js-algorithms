function exp(n) {
    let e = Math.E;
    let x = e;
    if (n === 0) {
        return 0;
    }
    
    for (let i = 1; i < Math.abs(n); i++) {
        x *= e;
    }
    
    if (n < 0) {
        return (1 / x) - 1;
    }
    
    return x - 1;
}

console.log(exp(2));
console.log(exp(0));
console.log(exp(-2));
console.log(exp(11));
