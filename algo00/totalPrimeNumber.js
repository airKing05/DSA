// how many prime number exist inside the n;
const isPrime = (n) => { // here n=i(coming form the last function)
    let isPrimeNumber = 1;
    if(n<2){
       return isPrimeNumber = 0;
    }
    for(let i =2 ; i<n; i++){
        if(n%i==0){
          isPrimeNumber = 0;
        } 
    }
    if(isPrimeNumber==1){
        return true
    }else{
        return false
    }  
}

const countPrimeNumber = (n)=>{
    let countPrime = 0;
    for (let i=2; i<=n; i++){
        if(isPrime(i)){
            countPrime++;
        }
    }
    return countPrime;
   
}
const number = 10;
const result = countPrimeNumber(number);
console.log(result);