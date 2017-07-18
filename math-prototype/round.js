function round(n) {
    const isPos = n >= 0;

    n = String(n).split('.');
    const wholeNum = Number(n[0]);
    const decimals = '0.' + n[1];

    if (decimals >= 0.5) {
        if (isPos) {
            return wholeNum + 1;
        }
        return wholeNum - 1;
    }

    return wholeNum;
}

module.exports = round;
