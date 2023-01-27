// bianry to decimal

//100 => 1 * 2 ** 2 + 0 * 2 ** 1 + 0 * 2 ** 0 = 4


// decimal to binaray

//4=> 4%2=0, 2%2=0, 1%2=1;

// chek the prime number by rcursion

// reverse Integer
//123=>321

//total prime number 


//####Array
// primet alternative number oF ARRAY

//find number of maximun element
//count smaller number from givn array
// double the number by reduce method

//add and even count

// fascinatingNumber

// get elements form the nested array

//hcf
// remver min and max ele from array till array.length ==0

// maximun length name

// max number in array

// filter numbeer from array

// palendromic number from array

// prime number on array

function isPrime(n) {
  let isPrimeNo = false;
  if (n < 1) {
    isPrimeNo = false;
  }
  if (n == 2) {
    isPrimeNo = true;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      //console.log(n)
      isPrimeNo = false;
      break;
    } else {
      isPrimeNo = true;
    }
  }
  return isPrimeNo;
}
function func(arr) {
  const primeArr = arr.filter((item) => { 
    if(isPrime(item)){
      return item
    }
  })
  return primeArr;
}
const result = func([1, 3, 2, 4, 89, 6, 7, 15, 25, 29, 50, 100])

console.log(result)