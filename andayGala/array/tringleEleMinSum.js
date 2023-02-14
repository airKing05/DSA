//L#23  

// Given a triangle array, return the minimum path sum from top to bottom.

// For each step, you may move to an adjacent number of the row below.More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

// Input: triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]
// Output: 11
// Explanation: The triangle looks like:
//       2                2
//      3 4              5 6
//     6 5 7          11 10 13
//    4 1 8 3       15 11 18 16    min of this is 11
// The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11(underlined above).


// T: O(N**2) and S:O(N)
function tringleEleMinSum(tringle){
    // create table from trigle with same dimantions
   let table = [];
    for (let row of tringle) table.push(new Array(row.length).fill(0));

    table[0] = tringle[0];

    for(let row=1; row<tringle.length; row++){
        for(let col=0; col<tringle[row].length; col++){
            // if we are at the first col and last col we ahve only one choice
            if(col===0){
                table[row][col] = tringle[row][col] + table[row-1][col];
            }else if(col===table[row].length-1){
                table[row][col] = tringle[row][col] + table[row-1][table[row-1].length -1];
            }else{
                // now we have two choice in table so we can get min sum for curent elements for table
                // picheli row ke col ki value km hogi usko, tringle ke current position wale element me jodenge
                table[row][col] = tringle[row][col] +  Math.min(table[row-1][col-1], table[row-1][col])
            }

        }
       // console.log(table)
    }
return Math.min(...table[table.length-1]);
}

const result = tringleEleMinSum([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]);
console.log(result)