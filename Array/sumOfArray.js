let arr = [1,2,3,4,5];
let l = arr.length;

let sum = 0;
arr.forEach(function(element) {
    sum = sum + arr[element];
    console.log(sum)
})

let total = 0;
for (let i =0; i<l; i++){
    total = total + arr[i];  
}
console.log(total);

let j=0;
let yog =0;
while (j<l) {
    yog = yog + arr[j]
    console.log(yog);
    j++;

}