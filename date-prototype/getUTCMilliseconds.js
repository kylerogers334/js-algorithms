const toUTCString = require('./toUTCString');

function getUTCMilliseconds(d) {
    // Milliseconds not available on the string form of date instance,
    // requiring this mess.
    return String(Number(toUTCString(d))).slice(10, 13);
}
