const toUTCString = require('./toUTCString');

function getUTCDate(d) {
    return Number(toUTCString(d).split(" ")[1]);
}

module.exports = getUTCDate;
