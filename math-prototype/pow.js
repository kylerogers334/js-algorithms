function pow(n, exp) {
    let x = n;
    for (let i = 1; i < exp; i++) {
        x *= n;
    }
    return x;
}

console.log(pow(2, 1));
console.log(pow(5, 3));
console.log(pow(2, 10));
