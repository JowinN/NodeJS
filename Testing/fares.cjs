rate = {
    fixed : 50,
    minkm : 5,
    perkm : 10,
    freemin : 15,
    permin : 2
}

function calcFare(km, min) {
    if (km < 0 || min < 0 || typeof km !== 'number' || typeof min !== 'number') {
        throw new Error("Invalid input: km and min must be non-negative numbers.");
    }
    let fare = rate.fixed;
    fare += (km > rate.minkm) ? ((km - rate.minkm) * rate.perkm) : 0;
    fare += (min > rate.freemin) ? ((min - rate.freemin) * rate.permin) : 0;
    return fare;
}


exports = module.exports = {
    rate,
    calcFare
};