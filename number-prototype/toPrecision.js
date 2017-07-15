function toPrecision(n, sigfig) {
    if (!sigfig) {
        return String(n);
    }
    
    sigfig = Math.round(sigfig);
    
    if (sigfig > 100 || sigfig < 1) {
        throw new RangeError('toPrecision() argument must be between 1 and 100');
    }

    if (!n) return '0';
    let exponent = 0;
    while (n > 10) {
        ++exponent;
        n /= 10;
    }

    while (n < 1) {
        --exponent;
        n *= 10;
    }

    const rounded = String(Math.round(n * (Math.pow(10, sigfig - 1))));
    const toDecimal = rounded.substring(0, 1) + 
                        (sigfig === 1 ? '': '.') +
                        rounded.substring(1);

    if (!exponent) return toDecimal;

    // Coercion to pass tests
    return String(Number(toDecimal + 'e' + exponent));
}

module.exports = toPrecision;
