
module.exports.pow = function (a, b) {
    let res = a;

    if (b < 0) {
        throw new Error('b can be only > 0');
    }

    while (b - 1) {
        res = res * a;
        b--;
    }

    return res;
}

module.exports.min = function (a, b) {
    return a > b ? b : a;
}