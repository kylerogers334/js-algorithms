const monthToInt = require('./monthToInt');

function setUTCHours(d, hourVal, minVal, secVal, msVal) {

    // Milliseconds must be extracted before coercion.
    // MS is lost in coercion.
    const ms = msVal || String(Number(d)).slice(10, 13);

    d = String(d).split(' ');

    const dayTime = d[4].split(':');

    const year  = d[3];
    const month = monthToInt(d[1]);
    const day   = d[2];
    const hour  = hourVal || dayTime[0];
    const min   = minVal || dayTime[1];
    const sec   = secVal || dayTime[2];

    return Number(new Date(year, month, day, hour, min, sec, ms));
}
