const monthToInt = require('./monthToInt');

function setUTCDate(d, day) {

    // Milliseconds must be extracted before coercion.
    // MS is lost in coercion.
    const ms = String(Number(d)).slice(10, 13);

    d = String(d).split(' ');

    const dayTime = d[4].split(':');

    const year  = d[3];
    const month = monthToInt(d[1]);
    const hour  = dayTime[0];
    const min   = dayTime[1];
    const sec   = dayTime[2];

    return Number(new Date(year, month, day, hour, min, sec, ms));
}

module.exports = setUTCDate;

