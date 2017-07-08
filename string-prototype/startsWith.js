function startsWith(str, item, beginSearch) {
    if (str[beginSearch] === item || str[0] === item) return true;

    return false;
}

module.exports = startsWith;
