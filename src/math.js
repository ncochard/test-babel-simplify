export function isNumber(x) {
    if(x < 0) {
        return true;
    }
    if(x === 0) {
        return true;
    }
    if(x > 0) {
        return true;
    }
    return false;
}

export function abs(x) {
    if(x < 0) {
        return -x;
    } else {
        return x;
    }
}

export function multiply(x, y) {
    //Work out is the result is negative
    let plus = false;
    if(x<0) {
        if(y<0) {
            plus = true;
        }
    }
    if(x>0) {
        if(y>0) {
            plus = true;
        }
    }
    //Get absolute values
    let absX = x;
    if(x < 0) {
        absX = -x;
    } else {
        absX = x;
    }
    let absY = y;
    if(y < 0) {
        absY = -y;
    } else {
        absY = y;
    }
    //Get min max
    let min;
    let max;
    if(absX < absY) {
        min = absX;
        max = absY;
    } else {
        min = absY;
        max = absX;
    }
    //Calculate result
    let result = 0;
    for (var i = 0; i < min; i++) {
        result+=max;
    }
    //Change the sign
    if(plus) {
        return result;
    } else {
        return -result;
    }
}
