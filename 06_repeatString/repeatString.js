const repeatString = function(str, num) {
    if (num < 0) {
        return 'ERROR';
    }

    let ctr = 0;
    let result = "";
    while(ctr < num){
        result += str;
        ctr++;
    }
    console.log(result);
    return result;
};

// Do not edit below this line
module.exports = repeatString;
