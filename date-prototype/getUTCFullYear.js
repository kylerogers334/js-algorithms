const toUTCString = require('./toUTCString');

function getUTCFullYear(d) {
    return Number(toUTCString(d).split(" ")[3]);
}