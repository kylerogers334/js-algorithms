function charAt(str, index = 0) {
    if (str[index] === undefined) {
        return '';
    }

    return str[index];
}

module.exports = charAt;
