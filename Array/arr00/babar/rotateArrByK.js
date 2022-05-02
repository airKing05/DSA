// arr [1,5,-3, 4]=>by k=2 => [-3, 4, 1, 5]
// length on arr [0, n-1], need to rotate from k-th index which is -3 in this case so 
// 4(n-1) will shifted k=2 times now position of 4 will became n-1+2=n+1; but length is [0, n-1]
// if we take a mode of 4-th position with total number of element of item in array will gives us 
// new position of 4 after rotating array by k=2; 
// like (n+1)%n=1 ; that means [_, 4, _, _] which is next 2(k=2) from the last position
// store it like arr[(i+k)%l] = arr[i];
// where as i is current position of 4 and k is for rotating times


const rotateArrByK = (arr, k) => {
    let l = arr.length;
    let temp= [];   // take a temp array because some of element repeated and some of them will miss
                     // [1,5,1,5] to avoiding overwrite "temp" taken
   for(let i =0; i<l; i++){
       temp[(i+k)%l] = arr[i];   // will shift k place in cyclic way
   }
   arr = temp;
    return arr
}

let rotateAt =  3;
let arr = [1,5, 3, 4,6, 0];  // every item will be rotated with 3
let result =  rotateArrByK (arr, rotateAt);
console.log(result)