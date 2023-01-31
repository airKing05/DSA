/// find the pair os sum that is equal to sumIsEqual 
/// array is already sorted
/// pair should be sorted by its first value
/// not able to complete last line

const findPairElementSum= (arr, s) =>{
    let l = arr.length;
    let pair = [];
    for(let i= 0; i<l; i++){
        for(let j=i+1; j<l; j++){
            if(arr[i]+arr[j]===s){   // optimization 
                let temp = [];
                let mini = Math.min(arr[i], arr[j]);
                let maxi = Math.max(arr[i], arr[j]);
                console.log(mini, maxi)
                temp.push(mini, maxi)          
                pair.push(temp);   // array pushing inside a array so   2D array will created
             }
        }
    }
    pair.sort((a, b) => a - b)  // not working, because 2d array hai, ans should be like- [[ -3, 3 ], [ -3, 3 ], [ -2, 2 ]  ]
    return pair;   // [ [ 1, 4 ], [ 2, 3 ] ]

};

const array = [2, -3, 3, 3, -2] // [1,2,3,4,5]; 
const sumIsEqual =0 //5;
const result = findPairElementSum(array, sumIsEqual); 
console.log(result)



//m1a


function addToPair(ele1, ele2, arr) {
    arr.push(ele2, ele1);
    return arr
}

function findPairElementSum1(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let pair = []
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                arr[i] > arr[j] ? addToPair(arr[i], arr[j], pair) : addToPair(arr[j], arr[i], pair);
                break;
            }
        }
        if (pair.length > 0) {
            newArr.push(pair);
        }

    }
    newArr.sort((a, b) => {
        //console.log(a[0], b[0])
        if (a[0] > b[0]) {
            return 1
        } else if (a[0] < b[0]) {
            return -1
        } else {
            return 0;
        }
    })
    return newArr;
}
const result1 = findPairElementSum1([-1, 8, 7, -8, 5, 2, 1, -2]);
console.log(result1)