function setTime(date, ms) {
    date = new Date(1970, 0, 1, 0, 0, ms);
    return ms;
}

module.exports = setTime;