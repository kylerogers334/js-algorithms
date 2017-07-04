function substr(str, start=0, length=str.length) {
    if (start < 0) {
        start = str.length + start;
        // handle excessive negative inputs
        if (start < 0) {
            start = 0;
        }
    }

    let newStr = "";

    for (let i = 0; i < length; i++) {
        if (str[start + i] !== undefined) {
            newStr += str[start + i];
        }
    }

    return newStr;
}
