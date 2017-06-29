function getSeconds(d) {
    return Number(
            String(d)
            .split(' ')[4]
            .split(':')[2]);
}

var date = new Date(Date.now())
console.log(getSeconds(date));
console.log(typeof date);