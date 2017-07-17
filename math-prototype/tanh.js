function tanh(x) {
    const a = Math.exp(x);
    const b = Math.exp(-x);
    
    return (a - b) / (a + b);
}

module.exports = tanh;
