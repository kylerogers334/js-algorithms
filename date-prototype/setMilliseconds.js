const monthToInt = require('./monthToInt');

function setMilliseconds(d, ms) {
    d = String(d).split(' ');

    const dayTime = d[4].split(':');

    const year  = d[3];
    const month = monthToInt(d[1]);
    const day   = d[2];
    const hour  = dayTime[0];
    const min   = dayTime[1];
    const sec   = dayTime[2];

    return Number(new Date(year, month, day, hour, min, sec, ms));
}

module.exports = setMilliseconds;
