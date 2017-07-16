function toFixed(n, digits) {
    if (!digits) {
        return String(Math.round(n));
    }

    const split = String(n).split('.');
    const int = split[0];
    let decimals = split[1] || '';
    const dLen = decimals.length;

    for (var i = decimals.length; i < digits; i++) {
        decimals += '0';
    }

    if (dLen < digits) {
        return int + '.' + decimals;
    }

    const fixed = decimals.slice(0, digits + 1) / 10;

    return int + '.' + Math.round(fixed);
}

module.exports = toFixed;
