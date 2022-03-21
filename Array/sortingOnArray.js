let arr = [1,3,2,4,16, 8,7, 0];
let l = arr.length;

for (let i=0; i<l; i++){
    if(arr[i]==0){
      arr.splice(arr[i])
      console.log(arr)
    }
    else if(arr[i]>arr[i+1]){
        let temp;
        temp = arr[i]
        arr[i] = arr[i+1];
        arr[i+1] = temp
    }
}
