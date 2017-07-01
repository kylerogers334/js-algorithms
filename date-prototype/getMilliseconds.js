function getMilliseconds(d) {
    return String(Number(d)).slice(10, 13)
}

var date = new Date(Date.now())
console.log(date.getMilliseconds());
console.log(getMilliseconds(date));