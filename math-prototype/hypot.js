function hypot() {
    let sum = 0;
    
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i] * arguments[i];
    }
    
    return Math.sqrt(sum);
}

