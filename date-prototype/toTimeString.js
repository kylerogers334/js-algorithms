function toTimeString(d) {
    return String(d)
        .split(' ')
        .slice(4, 7)
        .join(' ');
}

module.exports = toTimeString;
