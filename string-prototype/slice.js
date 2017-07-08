function slice(str, start, end) {
    if (!end || end >= str.length) {
        end = str.length;
    }
    
    if (start < 0 ) {
        start += str.length;
    }
    
    if (end < 0) {
        end += str.length;
    }
    
    if (start > str.length) {
        return '';
    }
    
    let s = '';
    for (let i = start; i < end; i++) {
        s += str[i];
    }
    return s;
}

module.exports = slice;
