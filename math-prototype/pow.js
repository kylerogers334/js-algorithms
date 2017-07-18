function pow(base, exponent){
    const e = Math.abs(exponent);
    let n = base;
    
    for (let i = 1; i < e; i++) {
        n *= base;
    }
    
    return exponent < 0 ? 1/n : n;
}

module.exports = pow;
