function trimLeft(str) {
    const arr = str.split("");
    const cleanedArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== " ") {
            for (let j = i; j < arr.length; j++) {
                cleanedArr.push(arr[j]);
            }
            break;
        }
    }
    return cleanedArr.join("");
}

module.exports = trimLeft;
