function getHours(d) {
    return Number(
            String(d)
            .split(' ')[4]
            .split(':')[0]);
}

var date = new Date(Date.now()).getHours()
// console.log(getHours(date));
console.log(typeof date);