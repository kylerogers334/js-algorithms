function padEnd(str, targetLength, padStr=' ') {
    if (targetLength < str.length) return str;
    if (padStr.length > targetLength) return padStr.slice(0, targetLength);

    const maxPad = targetLength - str.length;
    padStr = padStr.repeat(targetLength/padStr.length).slice(0, maxPad);

    return str + padStr;
}

module.exports = padEnd;
