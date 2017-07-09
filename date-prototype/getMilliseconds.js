function getMilliseconds(d) {
    // Milliseconds not available on the string form of date instance,
    // requiring this method.
    return Number(String(Number(d)).slice(10, 13));
}

module.exports = getMilliseconds;
