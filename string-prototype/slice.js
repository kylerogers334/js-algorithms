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

console.log(slice('0123456', 2));
console.log('0123456'.slice(2));
console.log(slice('0123456', -2, -1));
console.log('0123456'.slice(-2,-1));