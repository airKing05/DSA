// find the element who's value is equal to array's index
function indexEqualValue(arr) {
    let  l = arr.length;
    for (let i = 0; i<l; i++) {
        if(arr[i]===i){
          return arr[i]
        }else{
            return null
        }
    }
}

const arr = [0, 2, 3, 4, 5,9,8]
result = indexEqualValue(arr);
console.log(result);