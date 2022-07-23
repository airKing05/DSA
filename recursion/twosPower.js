// l#1

function twosPower(n){
if (n==0){
    return 1;
}
else{
    let smallProblem = twosPower(n-1);
    let bigProblem = 2*smallProblem
    return bigProblem
}
};
const power = 10;
const result = twosPower(power)
console.log(result)