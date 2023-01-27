
function longestName(arr) {
    let  l = arr.length;
    let newArr =[];
    let bigger;
    for (let i = 0; i<l; i++) {
       let lenNum= arr[i].length;
       newArr.push(lenNum)
    }
    let len = newArr.length;
    let max = newArr[0]
    for( let i=0; i<len; i++){
        if(newArr[i]>=max){
            max=newArr[i]
        }
    }
    return max  
}

const arr = ["anil", "anilraj", "anilrajmeena", "ram"]
result = longestName(arr);
console.log(result);


// m2

function longestName1(arr) {
    let maxLenName = arr[0];
    arr.filter((item, index, arr) => {
        if (maxLenName.length < item.length) {
            maxLenName = item;
        }
    })
    return maxLenName;
}

const result1 = longestName1(["anil", "anilraj", "anilrajmeena", "ramNarayanBundiWale", "anilrajmeenaBundibbbbbb", "akshay"]);
console.log(result1)