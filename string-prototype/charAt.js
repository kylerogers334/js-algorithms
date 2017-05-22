function charAt(str, index = 0) {
    if (str[index] === undefined) {
        return '';
    }

    return str[index];
}

console.log(charAt("abcd", 2)); // 'c'
console.log(charAt("abcd", 5)); // out of range => ''
