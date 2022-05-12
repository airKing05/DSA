const insertionSort = function(arr){
    let l = arr.length;
     // for, total number round to this sorting algo = l-1    
    for (let i=0; i<l; i++){
          let temp = arr[i]; //  assuming this element is already sorted;
          let j = i-1;       // to creat outer scope for j
          for (; j>=0; j--){    
              if(temp <arr[j]){  // then sift to left side
                  arr[j+1] = arr[j] 
              }else{ 
                  // array already sorted, so do not need to sift
                  break;
              }

          }
          arr[j+1] = temp;
    }
   return arr;
};

const arr = [7,5,8,2,9];
const res = insertionSort(arr);
console.log(res);



// S(1);
// O(n**2)
// best case [ 2, 4, 5, 6, 7 ]   O(n); total 4 compairison only
// worst case [7,6,5,4,2]        O(n**2) ; total n*n-1 compairson

