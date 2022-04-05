const identicalArr = (arr, brr) => {
    let al = arr.length;
    let bl = brr.length;
    if(al != bl){
        return false
    }
    arr.sort((a, b) => a-b);
    brr.sort((a, b) => a-b);
    for (let i = 0;  i<al; i++){
      if(arr[i]!=brr[i]){
          return -1
      }
    }
    return 1

};

const arr = [ 5,2,4,3,1, 7];
const brr = [1,3,5,2,4,6];
const result = identicalArr(arr, brr);
console.log(result);