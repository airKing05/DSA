// can we represent the number like 16 == 2**4 then true

const powerOfTwo = (n) => {
    let ans = 1;
    let i = 0   // 0-30==31 times
    while(i<=30){   // calculating the 30 value 2**31 is highset intiger
      if(ans == n){  // or (2**i == n)
          return true
      }
      ans = ans *2
      i++;
    }
    return false;
    
}
const number = 16;
const result = powerOfTwo(number);
console.log(result);