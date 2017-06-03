function floor(n) {
    n = String(n).split('.')[0];
    if (n[0] === "-") {
        return Number(n) - 1;
    }
    
    return Number(n);
}

console.log(floor(123123.95));
console.log(floor(4.95));
console.log(floor(-4.95));
console.log(floor(-444.91235));