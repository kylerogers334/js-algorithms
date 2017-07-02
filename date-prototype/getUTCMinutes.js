const toUTCString = require('./toUTCString');

function getMinutes(d) {
    return Number(
            toUTCString(d)
            .split(' ')[4]
            .split(':')[1]);
}