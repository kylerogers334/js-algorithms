function toDateString(d) {
    return String(d)
            .split(' ')
            .slice(0, 4)
            .join(" ");
}

module.exports = toDateString;
