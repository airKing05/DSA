// L#3 912

//  [5,1,1,2,0,0]
//     i
// j-1 j

//while(j>0 && arr[j-1]> arr[j]){
    //swap(arr[j], arr[j-1])
    //j--;
//}

// partialy sort
//T: O(N) and S: O(1);

// worst case
// bubble sort is bettern then the insertion sort
//T: O(N*N) and S: O(1) 


function insertionSort(arr){
    let len = arr.length;
    for(let i=1; i<len; i++){
        let j=i;
        while (j>0 && arr[j-1]> arr[j]) {
           [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            j--;
        }
    }
    return arr;
}

const result = insertionSort([0, 0, 1, 1, 5, 2]);
console.log(result)

