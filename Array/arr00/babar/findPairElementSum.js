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
                temp.push(mini, maxi)          
                pair.push(temp);   // array pushing inside a array so   2D array will created
             }
        }
    }
    pair.sort((a, b) => a - b)  // not working, ans should be like- [[ -3, 3 ], [ -3, 3 ], [ -2, 2 ]  ]
    return pair;   // [ [ 1, 4 ], [ 2, 3 ] ]

};

const array = [2, -3, 3, 3, -2] // [1,2,3,4,5]; 
const sumIsEqual =0 //5;
const result = findPairElementSum(array, sumIsEqual); 
console.log(result)