const toUTCString = require('./toUTCString');

function getUTCHours(d) {
    return Number(toUTCString(d).split(' ')[4].split(':')[0]);
}

module.exports = getUTCHours;
