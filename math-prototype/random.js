function random() {
    const state = new Array(624);
    let next, bits;

    const seed = Number(new Date);

  // This implementation returns a large number.
  // The ECMA spec calls for between 0 and 1.
    function format(n) {
        // padStart requires node 8+ or 7.5+ with harmony flag.
        return '0.' + String(n).padStart(9, '0');
    }

    function twist() {
        for (let  i = 0; i < 227; i++) {
            bits = (state[i] & 0x80000000) | (state[i + 1] & 0x7fffffff);
            state[i] = state[i + 397] ^ (bits >>> 1) ^ ((bits & 1) * 0x9908b0df);
        }
        // remaining words (except the very last one)
        for (let i = 227 ; i < 623; i++) {
            bits = (state[i] & 0x80000000) | (state[i + 1] & 0x7fffffff);
            state[i] = state[i - 227] ^ (bits >>> 1) ^ ((bits & 1) * 0x9908b0df);
        }

        bits = (state[623] & 0x80000000) | (state[0] & 0x7fffffff);
        state[623] = state[396] ^ (bits >>> 1) ^ ((bits & 1) * 0x9908b0df);
        next = 0;
    }

    state[0] = seed;
    for (let i = 1; i < 624; i++) {
        let s = state[i - 1] ^ (state[i - 1] >>> 30);
        state[i]  = (((((s & 0xffff0000) >>> 16) * 1812433253) << 16) +
                        (s & 0x0000ffff)* 1812433253) + i;
        state[i] |= 0;
    }

    twist();

    function random() {
        if (next >= 624)
          twist();

        let x = state[next++];
        x ^=  x >>> 11;
        x ^= (x  <<  7) & 0x9d2c5680;
        x ^= (x  << 15) & 0xefc60000;
        x ^=  x >>> 18;
        return format(Math.abs(x));
    }

    return random();
}

module.exports = random;
