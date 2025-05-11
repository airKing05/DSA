// p-27

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).


// returned array's order does not matter

var removeElement = function(arr, val) {
    let len = arr.length;

    const newArr = [];

    for(let i= 0; i<len; i++){
        if(arr[i] != val){
            newArr.push(arr[i]);
        }
    }

    // console.log("newArr", newArr)
};


const result = removeElement([3,2,2,3], 3);


var removeElement2 = function(arr, val) {
    let len = arr.length;

    let count=0;
    let r = len-1;
    for(let i= 0; i<=len; i++){

        if(arr[i] === val && i< r){
            // console.log("check",i, r, [arr[r], arr[i]])
            let temp = arr[i];
            arr[i] = arr[r];
            arr[r] = temp;
        //    [arr[r], arr[i]] = [arr[r], arr[i]];
            r--;
        }

        if(arr[i] === val){
           count++;
        }
    }

    for(let i=0; i<count; i++){
        // console.log("check value", arr[len-(i+1)])
        arr[len-(i+1)] = 0;
    }
    console.log("arr", arr, count)

};


const result2 = removeElement2([3,2,2,3, 5], 3);

// [3,2,2,3]
// we need only => [2,2,_,_], and 2 only

var removeElement3 = function(arr, val) {
    let len = arr.length;

    let pointer = 0;
    for(let i= 0; i<len; i++){
        if(arr[i] !== val){
            arr[pointer] = arr[i];
            pointer++;
        }
    }
    console.log("result----3", pointer, arr)
    // we need arr's value till point treverse 


    return {pointer, arr};

};


const result3 = removeElement3([3,2,2,3], 3);