// given array is sorted and remove duplicate from it
// without using extra space

// two pointer approch

function removeDuplicatesSortedArr(arr){
    let i = 0;
    let len = arr.length;
    for(let j=1; j<len; j++){
        if(arr[i] !==arr[j]){
            //console.log(arr[i], arr[j])
             i++
            arr[i] = arr[j]
        }
    }
    arr.length = i+1
    //console.log(len)
    return arr;

}
const array = [0, 0, 1, 1, 3, 5, 8];
const result = removeDuplicatesSortedArr(array);
console.log("reault",result)