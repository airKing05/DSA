let arr = [1,3,2,4,16, 8,7, 4, 3,20,96];

// forOf loop method
let obj = {}
for (const i of arr) {
    obj[i] = true
    
};

let newArr = Object.keys(obj)

// console.log(newArr);
// ---------------

// ES6
let newSet = new Set(arr);
let setArr = [...newSet]
//console.log(setArr);

//-----------------


// first sort then do o(n)
sortArr = arr.sort(function(a,b){
    return a-b
});
let b=[];
let l = sortArr.length;
let temp;
 for (let i=0; i<l; i++){
     if(sortArr[i] !== temp){
     b.push(sortArr[i]);
     temp = sortArr[i];
     }
 }

//console.log(b)

//---------------

// normally storing the value into the other array  o(n**2)

let c= [];
let len = arr.length;
for (let i=0; i<len; i++){
    if(c.indexOf(arr[i] === +1)){
        c.push(arr[i]);
    }
}

console.log(c)