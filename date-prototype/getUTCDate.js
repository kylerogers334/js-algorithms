const toUTCString = require('./toUTCString');

function getUTCDate(d) {
    return Number(toUTCString(d).split(" ")[2]);
}

module.exports = getUTCDate;
