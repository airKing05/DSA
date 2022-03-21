
let arr = [12, 5, "this", 6, 8, "anilraj", 10]
let l = arr.length;
let num = [];  // the array will have only 2 digit number in it
let str = [];  // the array will have string element only
let other = [];

for (let i=0; i<l; i++){
    if(isNaN(arr[i])==true){
        str.push(arr[i])
        
    }
    else if(arr[i]>=10){
        num.push(arr[i])
       
    }
    else{
        other.push(arr[i])
    }
}

console.log(num);
console.log(str);
console.log(other);
