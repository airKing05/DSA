// L#20 74
// search the key in 2D matrix
// Each row is sorted in non - decreasing order.
// The first integer of each row is greater than the last integer of the previous row.

// Input: matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3
// Output: true


//m1 
// search element into the each element into each row and each elements
//T: O(m*n) = O(n**2) and S:O(1)


// m2
// Binary Search; beacause given matrix is sorted
// apply binary search to each row
//T: O(m*logn)= O(n*logn) and S:O(1)

function binarySearch(mat, key) {
    let len = mat.length;
    let start = 0;
    let end = len - 1;
     let isExist = false;
    while (start < end) {
        let mid = start + parseInt((end - start) / 2);
        if (mat[mid] === key) {
            return true;
        } else if (mat[mid] > key) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return isExist;
}

function searchIn2DMat(mat, key) {
    let len = mat.length;
    for (let i = 0; i < len; i++) {
       return isExist = binarySearch(mat[i], key);
       // console.log("askjn", binarySearch(mat[i], key))
    };
   
};

const result1 = searchIn2DMat([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3);

console.log("result1",result1);


// m3
// Binary Search; beacause The first integer of each row is greater than the last integer of the previous row.
// apply binary search to whole matrix;
//T: O(logn) and S:O(1)

function searchIn2DMat3(mat, key) {
    let row = mat.length;
    let col = mat[0].length;
    let start = 0;
    let end = row+col  - 1;
    let isExist = false;
    while (start < end) {
        let mid = parseInt(start +(end - start)); // because of metrix
        let midVal = mat[Math.floor(end/col)][end%col]
        if (midVal === key) {
            return true;
        } else if (midVal > key) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return isExist;
}



 const result3 =  searchIn2DMat3([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 22);

console.log("result3",result3)



