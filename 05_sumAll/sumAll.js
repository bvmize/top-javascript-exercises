const sumAll = function(n1, n2) {
    let sum = 0;
    if (!Number.isInteger(n1) || !Number.isInteger(n2)) {
        return "ERROR";
    }
    if (n1 < 0 || n2 < 0) {
        return "ERROR";
    }
    let start = (n1 < n2) ? n1 : n2;
    let end = (n1 > n2) ? n1 : n2;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
