//L#5
//A peak element is an element that is strictly greater than its neighbors.

// Input: nums = [1, 2, 1, 3, 5, 6, 4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, 
//              or index number 5 where the peak element is 6.


//m1 
// create map , then sort , find the max ele index number from the obj
// due to sorting T: O(nlogn) S: O(n)

function peakEleArr(arr) {
    let len = arr.length;
    let obj = {};
    for (let i = 0; i < len; i++) {
        obj[arr[i]] = i;
    }
    arr.sort((a, b) => a - b);

    return obj[arr[len - 1]];


}
const result = peakEleArr([1, 2, 1, 3, 5, 6, 4]);
console.log("result", result);


//m2
// T: O(n) S: O(1)
function peakEleArr2(arr) {
    let len = arr.length;
    if (len === 1) {
        return 0;
    }
    // do element ka peak nahi niakal jaskt hai to jo bda hoga vha peak hoga --- 
    // aage or piche or koi compair krne ke lieye elemetns nahi hai
    if (arr[0] > arr[1]) {
        return 0;
    }
    if (arr[len - 1] > arr[len - 2]) {
        return len - 1;
    }

    for (let i = 0; i < len-2; i++) { // do not need to go till last element
        let left = arr[i];
        let mid = arr[i + 1];
        let right = arr[i + 2]
      
        if (mid > left && mid > right) {
            //console.log("from cond",arr[i])
            return i + 1;
        } 
    }

}
const result2 = peakEleArr2([1, 2, 1, 3, 5, 6, 4]);
console.log("result2", result2);


// m3- by a binary search 
// T: O(logN) S: O(1)
//  compair with the mid
//nums[i] != nums[i + 1] for all valid i.  in duplicat binary search will not be work

function peakEleArr3(arr) {
    let len = arr.length;
    let start = 0;
    let end = len-1;
   
    while (start < end) {
        mid = Math.floor(start + (end - start) / 2);
        console.log(arr[mid], arr[mid +1])
        if (arr[mid] > arr[mid + 1]) {
            end = mid;
        } else{
            start = mid+1;
        } 
       // console.log(arr[mid])
       return start;
    }
}
const result3 = peakEleArr3([1, 2, 1, 3, 5, 6, 4]);
console.log("result3",result3);