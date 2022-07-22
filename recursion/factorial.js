function factorial(n){
    // base case
if (n==0){
    return 1
}
if (n==1){
    return 1
}
// recursive relation
else{
    let smallProblem = factorial(n-1)
    let bigProblem = n * smallProblem;
    return bigProblem; 
}

};
const number = 4;
const result = factorial(number);
console.log(result)
