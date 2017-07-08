function trimRight(str) {
    for (let i = str.length - 1; i > 0; i--) {
        if (str[i] !== " ") {
            var trimUpTo = str.length - (str.length - i);
            break;
        }
    }
    return str.substring(0, trimUpTo + 1);
}

module.exports = trimRight;
