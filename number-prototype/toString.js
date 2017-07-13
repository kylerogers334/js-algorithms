function toString(n, r=10) {
        if (!n) return '0';
        let negative = '';
        if (n < 0) {n *= -1; negative = '-'}
        let string = '';
        while (n) {
                const digit = n % r;
                n = (n - digit) / r;
                const char = String.fromCodePoint(
                    digit < 10 ? 0x30 + digit
                    : 0x41 + digit - 10
                );
                string = char + string.toLowerCase();
        }
        return negative + string;
}

module.exports = toString;
