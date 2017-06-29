function getMinutes(d) {
    return Number(
            String(d)
            .split(' ')[4]
            .split(':')[1]);
}

var date = new Date(Date.now())
console.log(getMinutes(date));
console.log(typeof date);