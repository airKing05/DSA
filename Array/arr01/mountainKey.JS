// mountain element == highest number in arr, arr could be [1,2,3,4,6,3,2];
//  not able to access mid point of the array

const mountainKey = (arr) => {
    let l = arr.length;
    let start = 0;
    let end = l-1;
    let m = start + (end-start)/2;
    for (let i =0; i<l; i++){
       if(arr[m]<arr[m+1]){
           start = m +1;
       } else {
            end = m;
       }
       let m = start + (end-start)/2;
    }
    return start;
}

const arr = [1, 2, 3, 5, 6, 8,4,3,0];


const result = mountainKey (arr);
console.log(result)