// rang of intigier [-2**31, 2**31-1]
// 1,2,3 use this digit and make a number ans=0
// same flow; ans = ans*10 + digit; ==> 123
// reverse flow; ans = digit * (10 ** i) + ans; ==> 321

const decimalTOBinary = (n) => {
    let ans = 0;
    let i = 0;
    while (n != 0) {
        let bit = n & 1; // getting the last bit of n; if we got 1=>odd if got 0=> even  
        ans = bit * (10 ** i) + ans;  // it will give ans in reverse flow
        n = n >> 1       // after a last bit need a next last bit in the next itretion, 
                         // that for we need to right sift the number
        i++;
    }
    return ans;
};

const number = 2;
const result = decimalTOBinary(number);
console.log(result);




//m2
function fn(num) {
    let bi = '';

    while (num > 0) {
        let rem = num % 2;
        num = Math.floor(num / 2);
        bi = rem + bi;
    }

    return bi
}