function isBigger(num) {
    if (num > 5) {
        return true;
    }
    else return false;
}

// } syntax error here

const result = isBigger(11);
// console.log(result);

// const sum = a, b => a+b; ---- error

const sum = (a, b) => a+b;
const res = sum (3, 5)