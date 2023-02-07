// L#3

//Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.


//Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1, 6], [8, 10], [15, 18]]
// Explanation: Since intervals[1, 3] and[2, 6] overlap, merge them into[1, 6].

// T:O(N^2) S: O(N)
function mergerInterval(arr) {
    let len = arr.length;
    let newArr = [];
    for (let i = 0; i < len; i++) {
        let min = arr[i][0];
        let max = arr[i][1];

        let j = i + 1
        for (; j < arr[i].length; j++) {
            if (max > arr[i + j][0]) {
                // console.log(max, arr[i + j][0])
                newArr.push([min, arr[i + j][1]]);

            }
        }

        //    console.log(arr[i])
    }
    return newArr
}

const result = mergerInterval([[1, 3], [2, 6], [8, 10], [15, 18], [17, 20]])
//console.log(result)



//m2
// T:O(nlogn) S: O(N)

// first sort the intervals
// assign the intervals[0] into the result
// itrate the intervals

function mergerInterval1(intervals) {
    intervals.sort((a,b) => a[0]-b[0]);
    let newArr = [intervals[0]];
    for (let interval of intervals) {
        let e1 = newArr[newArr.length-1][1];
        let s2 = interval[0];
        let e2 = interval[1];

        if (e1 >= s2) {           
            newArr[newArr.length - 1][1] = Math.max(e1, e2);  // it could be [1, 10], [2, 6] so we need [1,10] not [1,6]
        } else {
            newArr.push(interval);
        }
    }
    return newArr;
};
const result1 = mergerInterval1([[1, 3], [2, 6], [8, 10], [15, 18]])
console.log(result1)