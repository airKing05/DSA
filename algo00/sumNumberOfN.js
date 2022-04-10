const getSumOfNumber = (n) =>{
    let sum = 0;
for(let i=0; i<=n; i++){
    sum = sum + i
}
return sum;
};

const number = 5;
const result = getSumOfNumber(number);
console.log(result);
