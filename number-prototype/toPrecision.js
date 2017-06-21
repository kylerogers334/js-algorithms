function toPrecision(n, sigfig) {
    if (!sigfig) {
        return String(n);
    }
    
    if (sigfig > 100 || sigfig < 0) {
        throw new RangeError('toPrecision() argument must be between 1 and 100');
    }
    
    let arr = String(n).split('.');
    let str;
    
    if (arr.length === 1) { // no decimal places
        str = arr[0];
        let e = str.length - 1;
        return str[0] + "." + str.slice(1, sigfig) + 'e+' + e;
    }
    
   
}

console.log(toPrecision(12345, 3))