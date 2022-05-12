function binary(n) {
    let ans = 0;
    let countBit = 0
    for (let i = 0; i <= n; i++) {
        let bit = n & 1;
        if(bit == 1){
           countBit++
        }
        ans = bit * (10 ** i) + ans;
        n = n >> 1
    }
    
    console.log(ans)
    // console.log(countBit)
    return countBit
}
let setBitOfNumber = (a, b) =>{
    let totalBit =  binary(a) //+ binary(b)
    return totalBit;
}

// setBit(a, b)

let num1 = 5;
let num2 = 6;
const checkBitCount = setBitOfNumber(num1, num2)
console.log(checkBitCount);