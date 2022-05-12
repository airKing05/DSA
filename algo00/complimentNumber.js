// 1's compliment ??
//  n == 0000101
// ~n == 1111010    /// this is 1's compliment of 5, need to replace first 4 1111 into 0000; 
//  need to create a mask for it from 0000, mask should be like 0000111, n ki 3rd position me 1 hai to utne tk ke one chahiye 
//  but how to find k time; right shift the n, till n become the zero 0000000
//  nom create a mask, left shift + or 1
//  0000(<<)=>00000|1=00001(<<)=>000010|1=000011(<<)=>0000110|1=0000111 == mask
// now ans = ~n & mask 

// this is not working


const complimentNumber = (n ) =>{
    let mask = 0;
    let m = n;
    if( n==0){  // edge case
        return 1
    }
    while(n!=0){
        mask = (mask << 1) || 1;
        n = n>> 1   // 3 bar right sift krenge to 
    }
    ans = (~n) & mask;
    return ans
};

const number = 6;
const result = complimentNumber(number);
console.log(result);