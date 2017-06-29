function getDate(d) {
    return String(d).split(' ')[2];
}

var date = new Date(Date.now())
console.log(getDate(date));
console.log(String(date));