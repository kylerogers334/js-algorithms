const toUTCString = require('./toUTCString');

function getUTCMinutes(d) {
    return Number(toUTCString(d)
        .split(' ')[4]
        .split(':')[1]);
}

module.exports = getUTCMinutes;
