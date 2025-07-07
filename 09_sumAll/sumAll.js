const sumAll = function(m, n) {
    let sum = 0, low, high;

    if(!Number.isInteger(m) || !Number.isInteger(n)){
        return "ERROR";
    }else if(m < 0 || n < 0){
        return "ERROR";
    }else if(m < n){
        low = m;
        high = n;
    }else {
        low = n;
        high = m;
    }

    for(let i=low; i<=high; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
