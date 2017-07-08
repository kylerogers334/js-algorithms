function includes(str, item, start = 0) {
    const l = item.length;
    
    for (let i = start; i < str.length; i++) {
        if ((i + l) > str.length) break;
        if (str.slice(i, i + l) === item) return true;
    }

    return false;
}

module.exports = includes;
