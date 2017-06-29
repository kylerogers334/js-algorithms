function getDate(d) {
    return Number(
            String(d)
            .split(' ')[2]);
}

var date = new Date(Date.now()).getDate()
console.log(getDate(date));
console.log(typeof date);