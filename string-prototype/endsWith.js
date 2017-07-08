function endsWith(str, item, maxSearch) {
    if (maxSearch < str.length) {
        if (str[maxSearch - 1] === item) {
            return true;
        }
        // endsWith("abcdefghijk", "k", 3)); would return true w/o this line.
        return false;
    }

    if (str[str.length - 1] === item) {
        return true;
    }

    return false;
}

module.exports = endsWith;
