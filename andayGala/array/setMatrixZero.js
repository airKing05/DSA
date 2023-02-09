// l#10 73

// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
// Input: matrix = [[1, 1, 1], 
//                  [1, 0, 1], 
//                  [1, 1, 1]]
// Output:[[1, 0, 1], 
//         [0, 0, 0], 
//         [1, 0, 1]]


// T: (n*m)= O(n**2) S: (n+m) =O(n)


// helper function
function setZeros(r, c, mat) {

    // c: constant itrate to row
    for (let i = 0; i < mat.length; i++) {
        mat[i][c] = 0
    };

    // r: constant itrate to col
    for (let i =0; i < mat[0].length; i++) {
        mat[r][i] = 0;
    }

    return mat;
}


// main function
function setMatrixZero(mat) {
    let index = [];
    for (let r = 0; r < mat.length; r++) {
        for (let c = 0; c < mat[r].length; c++) {

            if (mat[r][c] === 0) {
                index.push([r, c])
            }

        }
    }

    for (let address of index) {
        let row = address[0];
        let col = address[1];

        setZeros(row, col, mat);
    }
    return mat;
};

const result = setMatrixZero([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]);
console.log(result);