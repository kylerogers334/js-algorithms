function includes(str, item, start = 0) {
    for (let i = start; i < str.length; i++) {
        if (str[i] === item) return true;
    }

    return false;
}

const myStr = "here's johnny";

console.log(includes(myStr, "j")); // true
console.log(includes(myStr, "x")); // false
console.log(includes(myStr, "j", 10)); //false
