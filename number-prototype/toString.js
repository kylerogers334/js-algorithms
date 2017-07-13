function toString(n, r=10) {
        if (!n) return '0';
        if (n < 0) return '-' + toString(-n);
        let string = '';
        while (n) {
                const digit = n % r;
                n = (n - digit) / r;
                const char = String.fromCodePoint(
                    digit < 10 ? 0x30 + digit
                    : 0x41 + digit - 10
                );
                string = char + string;
        }
        return string;
}

module.exports = toString;
