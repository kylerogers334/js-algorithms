function isSafeInteger(int) {
    if (typeof int !== 'number') return false;
    if (Math.floor(int) !== int) return false;
    return (-(Math.pow(2, 53) - 1) < int && int < (Math.pow(2, 53) + 1));
}

module.exports = isSafeInteger;
