
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




// function bToD(arr) {
//     let len = arr.length
//     var maxLength = 0;
//     let storeIndexValueOfMax = 0
//     let maxLengthName = []

//     for (let i = 0; i < len; i++) {

//         let nameLength = arr[i].length;
//         if (nameLength > maxLength) {
//             maxLength = nameLength;
//             storeIndexValueOfMax = i
//             // console.log(maxLength, i)
//             // maxLengthName.push(arr[i])
//         }

//     }
//     //console.log(storeIndexValueOfMax)
//     return arr[storeIndexValueOfMax];
// }
// let array = ["anil", "anilraj", "anilrajmeena", "ramNarayanBundiWale", "anilrajmeenaBundi", "akshay"];
// const result = bToD(array);
// console.log(result)