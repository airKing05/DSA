//L#19 442

// integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// Input: nums = [4, 3, 2, 7, 8, 2, 3, 1]
// Output: [2, 3]



// method 1
// by hash 
// //T: O(n) and S:O(n)


// method-2
// we know the elements of arr range [1, n] , n is length;
// there we are using the extra space for storing the multiple elements, but considring it with constant space

//   1  2  3  4  5  6  7  8
//  [4, 3, 2, 7, 8, 2, 3, 1]
//  [  -3,-2,-7      -3,-1]  i=6,7; arr[6,7] =2,3; now arr[2,3] is already pointing to -3, -2; then push it into result 
//  i=1       val=-7
//     i=2 val=-2
//   val=-3i=3 
//
//T: O(n) and S:O(1)

function allDuplicateNumArr(arr) {
    let len = arr.length;
    let duplicateArr = [];
    for (let i = 0; i < len; i++) {
        //1
        let absoluteIndex = Math.abs(arr[i])-1; //4
        
        let valAtAbsoluteIndex = arr[absoluteIndex];
        console.log(absoluteIndex, valAtAbsoluteIndex)
        if (valAtAbsoluteIndex < 0) {
            //console.log(absoluteValAtIndex+1, arr[absoluteValAtIndex])
            duplicateArr.push(Math.abs(arr[i]));
        } else {
            arr[absoluteIndex] = -1 * arr[absoluteIndex]; //-7
        }
        // console.log(arr)
    }
    return duplicateArr;
}

const result = allDuplicateNumArr([4, 3, 2, 7, 8, 2, 3, 1]);
console.log(result);


