const removeFromArray = function(arr, ...para) {
    let newArr = [];

    for(element of para){
        arr = arr.filter(item => item !== element);
        newArr = arr;
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
