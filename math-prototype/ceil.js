function ceil(n) {
    n = String(n).split('.')[0];
    if (n[0] === "-") {
        return Number(n);
    }
    
    return Number(n) + 1;
}

console.log(ceil(123123.95));
console.log(ceil(4.95));
console.log(ceil(-4.95));
console.log(ceil(-444.91235));