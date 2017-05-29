function exp(n) {
    let e = Math.E;
    
    if (n === 0) {
        return 1;
    }
    
    for (let i = 1; i < Math.abs(n); i++) {
        e *= e;
    }
    
    if (n < 0) {
        return 1 / e;
    }
    
    return e;
}

console.log(exp(2));
console.log(exp(0));
console.log(exp(-2));
console.log(exp(11)); // Greater than 10 returns Infinity
