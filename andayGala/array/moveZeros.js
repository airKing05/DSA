// l#13 283

// move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Input: nums = [0,1,0,3,12]
// Output: [1, 3, 12, 0, 0]

//m1 filter method 

//m2 this will not work and not a good idea
function moveZeros(arr) {
    let len = arr.length;
    let count = 0
    for (let i = 0; i < len; i++) {
        if (arr[i] == 0) {
            delete arr[i];
            count++
        }
    }
    for (let i = 0; i < count; i++) {
      arr.push(0);
    }
    return arr;
}
const result = moveZeros([0, 1, 0, 3, 12])
console.log(result)


// m3 Array/arr01/sorting/moverZeroRight


// m4 
// sliding window approch (deatials on tsdsa/countUniqNumberInArr)
//  i  j              i  j  (i!=j)                                       i j 
// [0, 1, 0, 3,12]=>[ 1, 3, 12, 3, 12 ] =>(i++ and  arr[i] = arr[j]) => [ 1, 3, 12, 3, 12 ]

// T:O(n) S: O(1)

function moveZeros4(arr) {
    let len = arr.length;
    let lastNonZeroIndex = 0;

    for(let i=0; i<len; i++){
        if(arr[i] !== 0){
            arr[lastNonZeroIndex] = arr[i];
            lastNonZeroIndex++;
        }
    }
    for (let i = lastNonZeroIndex; i<len; i++){
        arr[i] = 0;
    }
    return arr;
}
const result4 = moveZeros4([0, 1, 0, 3, 12])
console.log(result4)