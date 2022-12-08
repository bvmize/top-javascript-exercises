const removeFromArray = function(array, ...removeVals) {
    const returnArray = [];
    for (let x of array) {
        let isRemovable = false;
        for (let y of removeVals) {
            if (x === y) {
                isRemovable = true;
            }
        }
        if (!isRemovable) {
            returnArray.push(x);
        }
    }
    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
