const getTimezoneOffset = require('./getTimezoneOffset');

function toUTCString(d) {
    // First find the timezone difference in hours.
    const offset = getTimezoneOffset(d) / 60;
    d = String(d);
    const hour = Number(d.slice(16, 18));
    let hourDiff = offset + hour;

    // Formatting checks
    if (hourDiff > 23) {
        hourDiff -= 24;
        if (hourDiff === 0) {
            hourDiff + "0";
        }
    }

    // New date frankenstein'd together.
    return d.substring(0, 16) +
           hourDiff +
           d.substring(18, 24) +
           " GMT+0000 (UTC)";
}

module.exports = toUTCString;