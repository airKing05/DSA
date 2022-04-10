// rang of intigier [-2**31, 2**31-1]
// 1,2,3 use this digit and make a number ans=0
// same flow; ans = ans*10 + digit; ==> 123
// reverse flow; ans = digit * (10 ** i) + ans; ==> 321

const binaryToDecimal = (n) => {
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

const number = 265541656;
const result = binaryToDecimal(number);
console.log(result);
