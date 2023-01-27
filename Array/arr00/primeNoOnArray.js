// find the prime number in array

function isPrime(n) {
  let isPrimeNumber = 1;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      //console.log(`${n} in not prime number`)
      return isPrimeNumber = 0;
    }
  }
  return isPrimeNumber;
}

function primeNoOnArray(arr) {
  let len = arr.length;
  let primeArr = [];
  for (let i = 0; i < len; i++) {
    if (isPrime(arr[i])) {
      primeArr.push(arr[i])
    }
  }
  return primeArr;
}
let array = [1, 3, 2, 4, 89, 6, 7, 15, 25, 29, 50, 100];
const result = primeNoOnArray(array);
console.log(result)



//m2 filter method
function isPrime1(n) {
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
function primeNoOnArray1(arr) {
  const primeArr = arr.filter((item) => {
    if (isPrime1(item)) {
      return item
    }
  })
  return primeArr;
}
const result2 = primeNoOnArray1([1, 3, 2, 4, 89, 6, 7, 15, 25, 29, 50, 100])

console.log(result2)