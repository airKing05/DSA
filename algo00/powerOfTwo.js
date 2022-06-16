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
const number = 1024;
const result = powerOfTwo(number);
console.log(result);



// function bToD(n, r) {
//   let originalNumber = n;
//   let count = 0;
//   while (n != 0) {
//     let factor = n % r;
//     if (factor === 0) {
//       count++
//     };
//     n = parseInt(n / r);
//   }
//   let twoPowerForm = r ** count;
//   // console.log(twoPowerForm, originalNumber)
//   if (twoPowerForm == originalNumber) return true;
//   return false;
// }