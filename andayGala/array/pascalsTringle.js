// L#22 118

// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Input: numRows = 5
// Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]

// T: O(N) and S:O(N)

function pascalTringle(numRow) {
    if (numRow < 1) {
        return [];
    }
    if (numRow == 1) {
        return [[1]];
    }
    let tringle = [[1]];
    for (let i = 1; i <=numRow; i++) {
        let prevRow = tringle[i - 1];
        //console.log(prevRow)
        let currRow = [];

        currRow.push(1);

        for (let j = 1; j<prevRow.length; j++) {
            currRow[j] = prevRow[j - 1] + prevRow[j]
        }

        currRow.push(1);

        tringle.push(currRow);
    }
    return tringle;
};

const result = pascalTringle(5);

//console.log(result);