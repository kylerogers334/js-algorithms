function min() {
    if (arguments.length === 0) return Infinity;
    let smallest = Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (isNaN(Number(arguments[i]))) return NaN;
        if (arguments[i] < smallest) {
            smallest = arguments[i];
        }
    }
    return smallest;
}

module.exports = min;
