// l#9
function factorial(n){
    if(n==0) return 1;
    
    return n* factorial(n-1)

};
const number = 5;
let result = factorial(number)
console.log(result);