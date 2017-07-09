function getHours(d) {
    return Number(
            String(d)
            .split(' ')[4]
            .split(':')[0]);
}

module.exports = getHours;
