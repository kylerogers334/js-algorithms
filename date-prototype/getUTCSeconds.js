const toUTCString = require('./toUTCString');

function getUTCSeconds(d) {
    return Number(
            toUTCString(d)
            .split(' ')[4]
            .split(':')[2]);
}

module.exports = getUTCSeconds;
