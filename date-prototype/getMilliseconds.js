function getMilliseconds(d) {
    // Milliseconds not available on the string form of date instance,
    // requiring this mess.
    return String(Number(d)).slice(10, 13);
}
