const factorial = (n) =>{
    let fact = 1;
    for(let i=1; i<=n; i++){
       fact = fact * i;
    }
    return fact;
};

const number = 5;
const result = factorial(number);
console.log(result);