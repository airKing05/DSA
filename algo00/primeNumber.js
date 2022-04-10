function primeNumber (n){
    let isPrime = 1; // assumming that number is prime
for(let i=2; i<n; i++){
    if(n%i==0){
        // not a prime number
       isPrime = 0;
       break;
    }
}
if(isPrime===0){
    return false
}else{
    return true
}

};

const number = 13;
const result = primeNumber(number);
console.log(result);