let arr = [1,3,2,4,16, 8,7, 4, 3,20,96];

// forOf loop method
// by key of object, because key of object always uniq 
function uniqByObject(arr) {
    //by object key 
    let obj = {};
    for (key of arr) {
        obj[key] = true
    }
    return Object.keys(obj)

}
const objResult = uniqByObject(arr);
console.log(objResult);




// ---------------

// ES6
let newSet = new Set(arr);
let setArr = [...newSet]
console.log(setArr);

//-----------------


// first sort then do o(n)
// method - 1
function uniqBySorting1 (){
    sortArr = arr.sort(function (a, b) {
        return a - b
    });
    let b = [];
    let l = sortArr.length;
    let temp;
    for (let i = 0; i < l; i++) {
        if (sortArr[i] !== temp) {
            b.push(sortArr[i]);
            temp = sortArr[i];
        }
    }
    return b;
}

let uniqBySorting1Result = uniqBySorting1(arr)
console.log("uniqBySorting1Result", uniqBySorting1Result)


// method -2  timeComplexity is nor the pri
function uniqBySorting2(arr) {
    let len = arr.length;
    let newArr = [];
    arr.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {
        if (arr[i + 1] != arr[i]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
let uniqBySorting2Result = uniqBySorting2(arr);
console.log("uniqBySorting2Result", uniqBySorting2Result) 

//---------------

// normally storing the value into the other array  o(n**2)
// fistly check the arr[i] element index in c=[] is index is +1 (means element exist on array)
// if not the push on it 

let c= [];
let len = arr.length;
for (let i=0; i<len; i++){
    console.log(c.indexOf(arr[i]))
    if(c.indexOf(arr[i] ==+1)){
        
        c.push(arr[i]);
    }
}

console.log(c)




