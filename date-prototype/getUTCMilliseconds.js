const toUTCString = require('./toUTCString');

function getUTCMilliseconds(d) {
    return +String(Number(d)).slice(10);
}

module.exports = getUTCMilliseconds;
