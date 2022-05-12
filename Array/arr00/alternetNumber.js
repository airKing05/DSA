// need to print alternate number of given array

function print(arr) {
    let  l = arr.length;
    for (let i = 0; i<l; i++) {
        if(i%2==0){
            console.log(arr[i])
        }
    }
}

const arr = [1, 2, 3, 4, 5,9,8]
print(arr);