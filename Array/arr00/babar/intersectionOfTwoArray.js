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
                arr2[j] = min;
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