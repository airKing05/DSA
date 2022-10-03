//L#01 unique and InterSection to two array

const array1 = [ 1,2,3,4,5];
const array2 = [4,5,6,7,8];

function isUnique(arr1, arr2, intersect){
    let newArr = new Set([...arr1, ...arr2]);
    return newArr;
}

function uniqueInterSectionArr(arr1, arr2){
    let interSectionArr = [];
    let len1 =arr1.length;
    let len2 =arr2.length;

    let i =0;
    let j = 0;
    while(i<len1 || j<len2){
        console.log(i,j)
        if(arr1[i]<arr2[j]){
           i++;
        }else if(arr1[i] === arr2[j]){
            //console.log(arr1[i], arr2[j])
            interSectionArr.push(arr1[i])
            i++;
            j++;
        }else{
            j++;
        }
       
    }
    
    return {
        interSectionArr: interSectionArr,
        unique: isUnique(arr1, arr2, interSectionArr)
    };
}

const result = uniqueInterSectionArr(array1, array2);
console.log(result);


//m2 for intersetion
const interSectionArr2 = array1.filter(item => array2.includes(item));
console.log(interSectionArr2)