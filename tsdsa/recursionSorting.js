//L#10
// sort a array by recursion technique

let newArr = [];
let first =0;
let second = 1;

function isSorted(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] > arr[i + 1]) {
            return false
        }
    }
    return true
}

function recursionSorting(arr) {
    if (isSorted(arr)) {
        newArr = arr;
        //console.log(newArr) 
        //return  arr;
    } else if (arr[first] > arr[second]) {
        // [2,1,4,3,5];
        [arr[first], arr[second]] = [arr[second], arr[first]];  // [1,2,4,3,5];
        first = 0;
        second = 1;
        recursionSorting(arr);
    } else {
        first++;
        second++;
        recursionSorting(arr);
    }

   
    // if (arr[first] > arr[second]) {
    //     // [2,1,4,3,5];
    //     [arr[first], arr[second]] = [arr[second], arr[first]];  // [1,2,4,3,5];
    //     first = 0;
    //     second = 1;
    //     recursionSorting(arr);
       
    // } else {
    //     first++;
    //     second++;
    //     recursionSorting(arr);
    //     return arr;
    // }
 
}

const array = [2, 1, 4, 3, 5, 1, 0, -3];
//const result = recursionSorting(array);

//console.log(result)

recursionSorting(array);
console.log(newArr)
