function toDateString(d) {
    return String(d)
            .split(' ')
            .slice(0, 4)
            .join(" ");
}
var x = new Date;
console.log(toDateString(x))