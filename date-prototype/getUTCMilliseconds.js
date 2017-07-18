function getUTCMilliseconds(d) {
    return +String(Number(d)).slice(10);
}

module.exports = getUTCMilliseconds;
