// L#21 54

// push matrix elements into the arr, such that loop moves like sprial way

// Input: matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

// not able to push 5

// T: O(N) and S:O(N)

function spiralMat(mat){
let left = 0;
let top = 0;
let right = mat[0].length-1;
let bottom  = mat.length-1;
let spiralArr = [];
let matSize = mat.length * mat[0].length;
let direction = 1

while (spiralArr.length< matSize) {
    
    // move left to right; top side
    for(let i = left; i<=right && spiralArr.length <matSize; i++){
        console.log(mat[top][i])
        spiralArr.push(mat[top][i]);  
    }
    top++;

    // move top to bottom; end side
    for (let i = top; i <=bottom && spiralArr.length < matSize; i++){
        spiralArr.push(mat[i][right]);
    }
    right--;

    // mover right to left; bottom side
    for (let i = right; i >= left && spiralArr.length < matSize; i--){
        spiralArr.push(mat[bottom][i])
    }
    bottom--;

    // move bottom to top; start side
    for (let i = bottom; i >= top && spiralArr.length < matSize; i--){
        spiralArr.push(mat[i][left])
    }
    left++;

return spiralArr;
}
}
const result = spiralMat([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(result)