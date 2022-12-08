const repeatString = function(str, n) {
    if (n<0) {
        return "ERROR";
    }
    else {
        let returnstr = "";
        for (let i = 0; i < n; i++) {
            returnstr += str;
        }
        return returnstr;
    }
};

// Do not edit below this line
module.exports = repeatString;
