const monthToInt = require('./monthToInt');

function setMinutes(d, min) {

    // Milliseconds must be extracted before coercion.
    // MS is lost in coercion.
    const ms = String(Number(d)).slice(10, 13);

    d = String(d).split(' ');

    const dayTime = d[4].split(':');

    const year  = d[3];
    const month = monthToInt(d[1]);
    const day   = d[2];
    const hour  = dayTime[0];
    const sec   = dayTime[2];

    return Number(new Date(year, month, day, hour, min, sec, ms));
}
