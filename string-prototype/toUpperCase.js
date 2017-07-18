/* eslint indent: "off" */
function toUpperCase(str) {
    const upper = [];
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'a': upper.push('A'); break;
            case 'b': upper.push('B'); break;
            case 'c': upper.push('C'); break;
            case 'd': upper.push('D'); break;
            case 'e': upper.push('E'); break;
            case 'f': upper.push('F'); break;
            case 'g': upper.push('G'); break;
            case 'h': upper.push('H'); break;
            case 'i': upper.push('I'); break;
            case 'j': upper.push('J'); break;
            case 'k': upper.push('K'); break;
            case 'l': upper.push('L'); break;
            case 'm': upper.push('M'); break;
            case 'n': upper.push('N'); break;
            case 'o': upper.push('O'); break;
            case 'p': upper.push('P'); break;
            case 'q': upper.push('Q'); break;
            case 'r': upper.push('R'); break;
            case 's': upper.push('S'); break;
            case 't': upper.push('T'); break;
            case 'u': upper.push('U'); break;
            case 'v': upper.push('V'); break;
            case 'w': upper.push('W'); break;
            case 'x': upper.push('X'); break;
            case 'y': upper.push('Y'); break;
            case 'z': upper.push('Z'); break;
            default: upper.push(str[i]);
        }
    }
    return upper.join('');
}

module.exports = toUpperCase;
