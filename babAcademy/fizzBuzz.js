//L#05  fizzBuzz 
// multiple of 3=> fizz, 5=>buzz, 3&5 => fizzbuzz

function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzBuzz";
    } else if (num % 5 === 0) {
        return "buzz";
    } else if (num % 3 === 0) {
        return "fizz";
    } else {
        return "not a fizzBuzz type number"
    }
};

const number = 15;
const result = fizzBuzz(number);
console.log("result", result);