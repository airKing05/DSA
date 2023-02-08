// l#8 867

// input   [[1,2,3], [4,5,6], [7,8,9]] => 
// output  [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

// T: O(M*N)=O(N**2) S: O(N)


function transposeMatrix(mat){
    let rowLen = mat.length;
    let colLen = mat[0].length;

    // creating empty transpose metrix
    let rowMat = new Array(rowLen).fill(0);
    let transMat = new Array(colLen).fill(rowMat);

    const result  = Array.from({length: mat[0].length}, () => new Array(mat.length).fill(0))

    for(let r = 0; r<rowLen; r++){
        for(let c =0; c<colLen; c++){
            result[c][r] = mat[r][c]
        // console.log(c, r,  transMat[c][r],  mat[r][c]);
        }
    }
    return result;
}

const result = transposeMatrix([[1, 2, 3], [4, 5, 6]]);
console.log(result)

