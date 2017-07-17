function trunc(n) {
    n = String(n).split('.')[0];
    return Number(n);
}

module.exports = trunc;
