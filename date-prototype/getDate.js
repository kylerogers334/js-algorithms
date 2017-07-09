function getDate(d) {
    return Number(
            String(d)
            .split(' ')[2]);
}

module.exports = getDate;
