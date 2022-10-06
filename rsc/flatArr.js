//fie#01
let array = [[1,2],[2,3], [4,[5,6],7]];
const result1 = [].concat(...array); // can do only one level
console.log("result1", result1);

const result2 = array.flat(2); // 2 level tak flat
console.log("result2", result2);


// custom method 

function customFlate(arr, depth=1) {
    let newArr = [];
    arr.forEach(element => {
        if (Array.isArray(element) && depth>0){
           newArr.push(...customFlate(element, depth-1))
        }else{
            newArr.push(element)
        }
    });
    return newArr
}

const result3 = customFlate(array, 2);
console.log("result3", result3);

