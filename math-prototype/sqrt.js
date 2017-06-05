function sqrt(n, guess) {
    if (!guess) {
        guess = n / 2.0;
    }
    
    const d = n / guess;
    const nextGuess = (d + guess) / 2.0;
    
    if (guess == nextGuess) {
        return guess;
    }
    
    return sqrt(n, nextGuess);
}

console.log(sqrt(16));
