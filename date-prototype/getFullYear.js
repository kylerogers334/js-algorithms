function getFullYear(d) {
    return Number(
            String(d)
            .split(' ')[3]);
}

module.exports = getFullYear;
