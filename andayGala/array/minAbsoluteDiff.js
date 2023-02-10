//L#15 1200

// Input: arr = [4, 2, 1, 3]
// Output: [[1, 2], [2, 3], [3, 4]]


// m1
// find the minimum difference and find thouse element who's difference equal to the minimun difference
// mini difference 2 for loop
// find the pair element 2 for loop
// sor the array
// T: O(N**2) AND S:O(N)

function minAbsoluteDiff(arr) {
    let len = arr.length;
    let minDiff = arr[1] - arr[0];
    if (minDiff < 0) {
        minDiff = -1 * minDiff;
    }

    for (let i = 0; i < len; i++) {
        let diff;
        for (let j = 1; j < len; j++) {
            if (arr[j] !== arr[i]) {
                diff = arr[j] - arr[i]
            }
            if (diff < 0) {

                diff = -1 * diff;

            }
            if (diff < minDiff) {

                minDiff = diff;

            }
        }
    }


    let ArrOfEle = [];
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            let diff = arr[j] - arr[i];
            if (diff < 0) {
                diff = -1 * diff;
            }
            if (diff === minDiff) {
                let min = Math.min(arr[j], arr[i])
                let max = Math.max(arr[j], arr[i])

                ArrOfEle.push([min, max])
            }
        }

    }
    return ArrOfEle.sort((a, b) => a[0] - b[0]);
}
const result = minAbsoluteDiff([4, 2, 1, 3]);
console.log("result", result);



//m2 
// sort the array
// find the minDiff
// check thouse pair who's diff is equal to minDiff
// push the pairs into the a new array
// return it

// T: O(NlogN) AND S:O(N)


function minAbsoluteDiff2(arr) {
    let len = arr.length;
    arr.sort((a, b) => a - b);

    let minDiff = arr[1] - arr[0];

    for (let i = 0; i < len - 1; i++) {
        // if (arr[i + 1] - arr[i] < minDiff) {
        //     minDiff = arr[i + 1] - arr[i];
        // }

        let diff = arr[i + 1] - arr[i] ;
        minDiff = Math.min(diff, minDiff)
    }

    // check the pairs differenc is equal to the minDiff
    // apply two pointer

    //console.log(arr)
    let ArrOfPairs = []
    let p1 = 0;
    let p2 = 1;

    for(let i = 0; i<len; i++){
        //console.log(arr[p1], arr[p2], p1, p2)
        if(arr[p2]-arr[p1] === minDiff){
           
            ArrOfPairs.push([arr[p1], arr[p2]]);
            
        }
        p1++;
        p2++;
    }
    return ArrOfPairs;
}
const result2 = minAbsoluteDiff2([3, 8, -10, 23, 19, -4, -14, 27])
console.log("result2", result2)


