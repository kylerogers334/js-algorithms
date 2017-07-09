function getSeconds(d) {
    return Number(
            String(d)
            .split(' ')[4]
            .split(':')[2]);
}

module.exports = getSeconds;
