const decimalToBinary = (n) => {
let ans = 0;
let i = 0;
while(n !=0){
    let bit = n & 1;  // not working for n%10
     if(bit == 1){
    ans = bit* (2**i) + ans
  }
    n = n/10;         // not working fot n>>1 ==> 110
    i++;
}
return ans
};

const number = 110; // this is decimal number as a input, but comp take it 00000--------00110  
const result = decimalToBinary(number);
console.log(result)