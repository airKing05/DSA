function printNumber(n) {
    if (n == 0) {
        return;
    }
    // head recursive relation
    printNumber(n - 1)
    console.log(n)
};
const number = 5;
printNumber(number);


function printNumber2(n) {
    if (n == 0) {
        return;
    }
    console.log(n)
    // tell recursive relation
    printNumber2(n - 1)
    
};
const number2 = 5;
printNumber2(number2);
