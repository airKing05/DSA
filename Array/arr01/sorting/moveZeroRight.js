// arr = [3,0,5,0,1,2,0]  sift all zeros into right side
// arr = [3,5,1,2,0,0]
// two pointer approach 

const moveZeroRight = (arr) => {
    let l = arr.length;
    // we are shifting non zero into left side
    let nonZero = 0;    // first nonZero value should be come to this stage
    for(let j=0; j<l; j++){
        if(arr[j] !==0){
            [arr[nonZero], arr[j]] = [arr[j], arr[nonZero]]
            nonZero++;  // if non Zero already present on the 0 index next non zero came should be on 1th
        };
    }
    return arr
}

let arr = [0, 3,0,5,0,1,2,0];
let result =  moveZeroRight(arr);
console.log(result)
