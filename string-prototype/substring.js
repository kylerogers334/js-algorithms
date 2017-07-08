function substring(str, start=0, end=str.length) {
    if (start === end) return '';
    if (start > str.length) return '';
    if (start < 0 || isNaN(Number(start))) start = 0;
    if (end < 0 || isNaN(Number(end))) end = 0;
    if (end > str.length) end = str.length;

    // parameter swap when weird paraters are given
    if (start > end) {
        [start, end] = [end, start];
    }

    let newStr = '';
    for (var i = start; i < end; i++) {
        newStr += str[i];
    }

    return newStr;
}

module.exports = substring;
