function toExponential(n, x=0) {
    if (n < 0 || isNaN(n) || n === Infinity) {
        return n;
    }
    
    const decimalPlaces = String(n).split('.')[0].length - 1;
    let str = String(n).split(".").join("");
    str = str[0] + "." + str.slice(1);
    
    // e+decimalPlaces is auto appended for
    // large numbers.
    if (str.length > 19) {
        return str;
    }
    
    return str + `e+${decimalPlaces}`;
}
console.log(toExponential(8012312399081230123123123));
console.log(toExponential(123456789012345678901));
console.log(123456789012345678901 .toExponential());
console.log(812.38 .toExponential());
console.log(toExponential(812.38));
