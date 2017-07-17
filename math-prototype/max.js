function max() {
    if (arguments.length === 0) return -Infinity;
    try {
        let biggest = -Infinity;
        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i] > biggest) {
                biggest = arguments[i];
            }
        }
        return biggest;
    } catch (e) {
        return NaN;
    }
}

module.exports = max;