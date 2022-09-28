//L#17
// selection sort: considet firts index element as min and compair it to all elements of array and swaped with it's min value
//  O(n*2) will take more time with respected to the anyohter algorithm

function selectionSort(arr) {
    let len = arr.length;
   
    for (let i = 0; i<len; i++) {  
        let minIndex = i;
     for(let j=i+1; j<len; j++){
        if(arr[minIndex]>arr[j]){
            // [arr[minIndex], arr[j]] = [arr[j], arr[minIndex]] 
            minIndex = j
        }
     }
     if(i !== minIndex){
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
     }
    }
    return arr
};

const array1 = [3, 2, 5, 1, 6, 8, 4]; 
const array2 = [5, 1, 2, 3, 4];
const result = selectionSort(array1);
console.log(result)