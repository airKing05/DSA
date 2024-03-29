
// 12345 => 1+2+3+4+5 = 15 => 1+5 =6

// method -1
function sum(num) {
    while (num >= 10) {
        let number = num;
        let add = 0;
        while (number !== 0) {
            let lastDigit = number % 10;
            number = Math.floor(number / 10)
            add += lastDigit;
        }
        num = add;
    }

    return num;
}
const result = sum(12345);
console.log(result);



// method-2
function sum2(num) {
    let add = 0
    while (num !== 0) {
        let lastDigit = num % 10;
        num = parseInt(num / 10)
        add = add + lastDigit
    }
    return add
}

function recursive(num) {
    if (num < 10) {
        return num;
    } else {
        const s = sum(num);
        return recursive(s)
    }
}

const result2 = recursive(12345);
console.log(result2);


//m2a
function func(n) {
    let sum = 0;
    while (n != 0) {
        let digit = n % 10;
        sum = sum + digit;
        n = parseInt(n / 10);
    }
    if (sum >= 10) {
        return func(sum);
    }
    return sum;
}
const result = func(12345);
console.log(result)


// method -3 
function sum3(num) {
    num = num.toString().split("").map(item => parseInt(item));
    let add = num.reduce((acc, curr) => {
        return acc = acc + curr
    }, 0);

    if (add >= 10) {
        //console.log(add)
        return sum3(add)
    } else {
        // console.log(add)
        return add
    }

}
const result3 = sum3(12345)
console.log(result3)