const intProductSumDiff = (n) =>{
    let product = 1;
    let sum = 0;
   while(n!=0){
        let digit = n%10;
        product = product*digit;
        sum = (sum + digit);
        n = n/10;

    }
    return product - sum

};

const number = 123;
const result = intProductSumDiff(number);
console.log(result);