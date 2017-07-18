function getMinutes(d) {
    return Number(String(d)
        .split(' ')[4]
        .split(':')[1]);
}

module.exports = getMinutes;
