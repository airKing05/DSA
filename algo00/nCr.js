const factorial = (val) =>{
    let fact = 1
    if (val == 0){
        return 1
    }
    
    for(let i = 1; i<=val; i++){
        fact = fact*i;
    }
    return fact;
}

const nCr = (n, r) =>{
    let num = factorial(n);
    let deno = (factorial(r)*factorial(n-r))
    let ans = num/ deno 
    return ans
}

const n = 13;
const r = 0;
const result = nCr(n, r);
console.log(result);