// l#9 48
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// 90 degree rotate

// Input:  [[1, 2, 3], 
//          [4, 5, 6], 
//          [7, 8, 9]]
// Output: [[7, 4, 1], 
//          [8, 5, 2], 
//          [9, 6, 3]]

// swap the elements of same index as row and col 
// then reverse that swapable 

// T: O(N) S: O(1)

function rotateMatrix(mat){
for(let r=0; r<mat.length; r++){
   for(let c=r; c<mat[0].length; c++){
       [mat[r][c], mat[c][r]] = [mat[c][r], mat[r][c]]
   }
}

for(let r=0; r<mat.length; r++){
    mat[r].reverse();
    // for(let c= r; c<mat[0].length; c++){
       
    // }
}
return mat
}
const result = rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

console.log(result)
