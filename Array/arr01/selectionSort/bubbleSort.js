const bubbleSort = (arr ) => {
    let l = arr.length;
    let swap = false;   // for the optimizing the solution for the best case
    for (let i =0; i<l; i++){
        // first to n-1 round 
        for (let j = 0; j<l-i; j++){
            // processing the element to till n-i
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swap = true;

            }  
           
        }
        if(swap == false){
            // go out form the loop array already sorted
            break;
        }
        console.log(arr)    // will not pirent this array if sorted
    }
    return arr;
}

const arr = [5,4,7,1, 4];    // [1,4,6,7,8]
const result = bubbleSort(arr);
console.log(arr);


//  the first loop will run to full spain n
// second loop will run till the n-i;  here i is number of round
// bubble sort is used to shift arr's i'th largest value to the i'th largest max point
// [ 4, 5, 7, 1 ]
// [ 4, 5, 1, | 7 ]
// [ 4, 1, 5, 7 ]
// [ 1, 4, 5, 7 ]
// [ 1, 4, 5, 7 ]

// it is stable algorithm 
// [ 4i, 5, 1, 4ii, 7 ]
// [ 4i, 1, 4ii, 5, 7 ]
// [ 1, 4i, 4ii, 5, 7 ]
// [ 1, 4i, 4ii, 5, 7 ]   order is same to the input array's multiple items
// [ 1, 4, 4, 5, 7 ]
// [ 1, 4, 4, 5, 7 ]


// time complexity = O(n**2);    1 + 2 + 3 + ... + n-2 + n- 1 + n == n(n-1)/2
// not take extra space so space complexity == S(1)


// best case complexity is ==>  when array is already sorted  time Complexity= O(n)   by optimizing the solution
// worst case complexity is ==>  when array in reverse order  time complexity = O(n**2)