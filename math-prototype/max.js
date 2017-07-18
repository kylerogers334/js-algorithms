function max() {
    if (arguments.length === 0) return -Infinity;
    let biggest = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (isNaN(Number(arguments[i]))) return NaN;
        if (arguments[i] > biggest) {
            biggest = arguments[i];
        }
    }
    return biggest;
}

module.exports = max;