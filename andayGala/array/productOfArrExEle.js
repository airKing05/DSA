//l#6 

//Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// nums = [1,2,3,4] => [24, 12, 8, 6] 
// nums = [-1,1,0,-3,3] => [0, 0, 9, 0, 0]

// similler question is sumOfOtherEle is avilabe on codeDost

//m1 by dividing approch
// also not work on second case
//T:O(N) and S: O(1);

function productOfArrExEle(arr) {
    let product = arr.reduce((acc, curr, index, array) => {
        acc = acc * curr;
        return acc;
    }, 1);

    let len = arr.length;
    let pro = 1
    for (let i = 0; i < len; i++) {
        arr[i] = product / arr[i];
    }
    return arr;
}

const result = productOfArrExEle([1, 2, 3, 4]);
console.log(result)



// m2 without dividing approch
// T:O(N) and S: O(n)=> counting zero and storing it into array
// suffelout zero 
// if count of 0 is more then one times then all the elements of output array will be zero
// if count of 0 is Exactly one times then exacept the 0th index all the elements of output array will be zero





// m3 dynamic programing approch
// create two auxiliary array from left and right side
//       [1,2,3,4]
// left  [1,1,2,3]   nothing is left side so assign 1 there and mutliply  [1 1*1 1*2 2*3] 
// right [24,12,4,1]  assign 1 to right side; [12*2, 4*3, 1*4, 1]

// T:O(N) and S: O(n)=> two auxiliary array created

function productOfArrExEle3(arr) {
    let len = arr.length;
    let left = [];
    left[0] = 1

    let right = new Array(len).fill(0);  // can create by this ways
    right[len-1] = 1;

    for (let i = 1; i < len; i++) {
        left[i] = (left[i - 1] * arr[i - 1]);
    }
    for (let i = len-2; i>=0 ; i--) {
        right[i] = (right[i+1] * arr[i + 1]);
        //console.log(i, right[0], right, right[i + 1], arr[i + 1])
    }
    for(let i = 0; i<len; i++){
        arr[i] = left[i]*right[i];
    }
    return arr;
}
const result3 = productOfArrExEle3([-1, 1, 0, -3, 3]);
console.log(result3)