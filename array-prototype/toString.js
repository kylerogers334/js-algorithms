function toString(arr) {
    let comma = ",";
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) comma = "";
        str += (arr[i] + comma);
    }
    return str;
}

module.exports = toString;
