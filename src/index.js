
exports.min = function min (array) {
    if (array && array.length != 0) {
        array.sort((a,b) => {
            if (a > b) return 1;
            else if (a < b ) return -1;
            else return 0;
        })
        return array.shift();
    } else return 0;
}

exports.max = function max (array) {
    if (array && array.length != 0 ) {
        array.sort((a,b) => {
            if (a > b) return 1;
            else if (a < b ) return -1;
            else return 0;
        })
        return array.pop();
    } else return 0;
}

exports.avg = function avg (array) {
    if (array && array.length != 0) {
        return array.reduce((prev, current) => current += prev,0)/array.length;

    } else return 0;
}
