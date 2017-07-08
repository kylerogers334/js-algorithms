function toLowerCase(str) {
    const lower = [];
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "A": lower.push("a"); break;
            case "B": lower.push("b"); break;
            case "C": lower.push("c"); break;
            case "D": lower.push("d"); break;
            case "E": lower.push("e"); break;
            case "F": lower.push("f"); break;
            case "G": lower.push("g"); break;
            case "H": lower.push("h"); break;
            case "I": lower.push("i"); break;
            case "J": lower.push("j"); break;
            case "K": lower.push("k"); break;
            case "L": lower.push("l"); break;
            case "M": lower.push("m"); break;
            case "N": lower.push("n"); break;
            case "O": lower.push("o"); break;
            case "P": lower.push("p"); break;
            case "Q": lower.push("q"); break;
            case "R": lower.push("r"); break;
            case "S": lower.push("s"); break;
            case "T": lower.push("t"); break;
            case "U": lower.push("u"); break;
            case "V": lower.push("v"); break;
            case "W": lower.push("w"); break;
            case "X": lower.push("x"); break;
            case "Y": lower.push("y"); break;
            case "Z": lower.push("z"); break;
            default: lower.push(str[i]);
        }
    }
    return lower.join("");
}

module.exports = toLowerCase;
