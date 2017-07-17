function pow(base, exponent){
    let n = base;
    
    for (let i = 1; i < exponent; i++) {
        n *= base;
    }
    
    return n;
}

module.exports = pow;
