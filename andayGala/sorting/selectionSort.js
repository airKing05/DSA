//L#2  912

// Input: nums = [5, 1, 1, 2, 0, 0]
// Output: [0, 0, 1, 1, 2, 5]


// [5, 1, 1, 2, 0, 0]      minIdx = i
//  i  j 
//     =i+1
// swap(arr[minIdx], arr[i])


// in-efficent algorithem for sorting
//T: O(N*N) and S: O(1) 


function selectionSort(arr){
    let len = arr.length;
    for(let i=0; i<len; i++){
        let minIdx = i;
      
        for(let j=i+1; j<len; j++){
            if(arr[minIdx]>arr[j]){
                minIdx = j;
            }
        }
       
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        console.log(i, minIdx, arr[i], arr[minIdx])
    }
    return arr;
}

const result = selectionSort([5, 1, 1, 2, 0, 0]);
console.log(result)