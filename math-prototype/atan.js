function atan(x) {
    let sum = 0;
    for (let i = 0; i <80; i++) {
        sum += (Math.pow(-1, i) * Math.pow(x, (2 * i + 1))) / (2 * i + 1);
    }
    return x < 0 ? -sum : sum;
}

module.exports = atan;
