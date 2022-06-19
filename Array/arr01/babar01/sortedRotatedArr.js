// check given array is sorted and rotated: yes or not
// [3,4,5,1,2] 
// there could be three case
// case -1 [1,2,3,4,5] 1- pair exist here arr[i-1]>arr[i]
// case -2 [3,4,5,1,2] 1- pair exist here
// case -3 [3,4,1,2,5] 2- pair exist here
// case -4 [1,1,1,1,1] 0- pair exist here

const sortedRotatedArr = (arr) => {
   let l = arr.length;
   let pairCount = 0;
   for(let i=1; i<=l; i++){
    //console.log(arr[i-1]>arr[i])
       if(arr[i-1]>arr[i]){
           pairCount++;
          // console.log(pairCount)
       }
   }
   if(arr[l-1]> arr[0]) pairCount++;
   //console.log(arr[l-1]> arr[0])
   return pairCount<=1;   // return in case of pairCount is 0 || 1
} 
const array1 = [3,4,5, 0, 1,2];  // [1,1,1] true also for this case
const result1 = sortedRotatedArr(array1);
console.log(result1)
