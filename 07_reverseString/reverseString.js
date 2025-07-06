const reverseString = function(str) {
    const result = str.split("");
    const arr = result.reverse();
    str = arr.join("");
    console.log(`${str} ${result} ${arr} ${str}`);
    return str;
};

// Do not edit below this line
module.exports = reverseString;
