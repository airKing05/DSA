// find the missign odd element in given array
// input = [5,7,9,11,15];
// output = 13

function missingOddEleArr(arr){
    let len = arr.length;
    let diff = arr[1] - arr[0];
    let missingELe = null;
    let missingELeArr = []
    for(let i=0; i<len-1; i++){
        if(arr[i+1]-arr[i] !== diff){
            //console.log(arr[i])
            missingELe = arr[i]+diff;
            missingELeArr.push(missingELe)
            break;
        }
    }
    return missingELe;
    //return missingELeArr;
}

const result = missingOddEleArr([5,7,9,11,15,17,21]);
console.log(result)