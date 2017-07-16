function toExponential(n, numDigits) {
    n = Number(n); // handle 504e123 inputs
    numDigits = numDigits || String(n).length;
    let sign = '';
    if (n < 0) {
        n *= -1;
        sign = '-';
    }

    numDigits = Math.floor(numDigits);

    if (numDigits > 20 || numDigits < 0) {
        throw new RangeError('digits out of range');
    }

    const len = String(n).split('.')[0].length - 1 || 1 ;
    const x = String(n / (Math.pow(10, len))).split('.');

    const int = x[0];
    let digits = x[1] || '';
    digits = digits.slice(0, numDigits);

    return sign + int + '.' + digits +'e+' + (len);
}

module.exports = toExponential;
