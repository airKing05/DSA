/// [1,2,2,3,3,3], [2,3,3,4] ==> 2,3,3
/// array is sorted
/// this is not fully optimize solution



// this solution only work when arr1 has multi element more then arr2 
const intersectionOfArray = (arr1, arr2) =>{
    let l1 = arr1.length;
    let l2 = arr2.length;
    let min = -123546;
    let intersect = []
    for(let i= 0; i<l1; i++){
        for(let j=0; j<l2; j++){
            if(arr1[i]<arr2[j]){   // optimization 
                break;             // no need to go farther
             }
            if(arr1[i]===arr2[j]){
                intersect.push(arr2[j])
                arr2[j] = min;  // min value ko phle match element ke sath metch krne ke baad us ki jgh assign kr denege taki fir se usi ko match na kres
                console.log(arr2[j])
                break;
            }
        }
    }
    return intersect;

};

const array1 = [1,2,2,3,3,3]; 
const array2 = [2,3,3,4];
const result = intersectionOfArray(array1, array2); 
console.log(result)



const formObj = (str) => {
    let obj = {};
    for (const iterator of str) {
        obj[iterator] = obj[iterator] + 1 || 1;
    }
    return obj
}


const getInteArr = (num, arr, key) => {
    while (num !== 0) {
        arr.push(+key);
        num--;
    }
    return arr;
}


let fn = (arr1, arr2) => {
    let len1 = arr1.length;
    let len2 = arr2.length;

    let obj1 = formObj(arr1);
    let obj2 = formObj(arr2);

    let common = [];
    for (let key in obj1) {
        if (key in obj2) {
            let countOfEle1 = obj1[key];
            let countOfEle2 = obj2[key];
            let intersectionCount = Math.min(countOfEle1, countOfEle2);
            common = getInteArr(intersectionCount, common, key);
        }
    }


    return common;

}

const array3 = [1, 2, 3, 3, 3, 4, 4, 4];
const array4 = [2, 3, 3, 4, 4];

const result1 = fn(array3, array4)
console.log(result1);