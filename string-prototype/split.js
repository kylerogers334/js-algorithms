function split(str, sep, limit) {
    if (!limit) {
        limit = str.length;
    }
    
    if (!sep || sep === "") {
        return new Array(str);
    }
    
    const arr = [];
    let tempStr = "";
    let tempLimit = 0;
    let j = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === sep || i === str.length - 1) {
            arr[j] = tempStr;
            tempLimit++;
            if (tempLimit === limit) {
                break;
            }
            tempStr = "";
            j++;
            continue;
        }
        tempStr += str[i];
    }
    return arr;
}

const str1 = "abcdefg";
const str2 = " 102 123 lakfja nasklf !!)@*";

console.log(split(str1, "a"));
console.log(split(str2, "a"));
console.log(split(str2));
console.log(split(str2, "l", 1));