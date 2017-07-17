function log1p(x) {
    x = x + 1;
    let sum = 0;

    for (let i = 0; i < 1000; i++) {
        sum += (1 / (2 * i + 1)) * 
                Math.pow(((x - 1) / (x + 1)), (2 * i + 1));
    }

    return 2 * sum;
}

module.exports = log1p;
