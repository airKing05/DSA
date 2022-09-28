// L#07
// check Square Elements of one Array to anyother array
// array1=[1,2,3,4] array2=[16, 9, 4, 1] =>true
// time complexity is O(N**2)

function checkSquareEleArr(arr1, arr2){
let len1 = arr1.length;
let len2 = arr2.length;


for(let i=0; i<len1; i++){
    let isExist = false;
    //let number = arr1[i] ** 2
    for(let j=0; j<len2; j++){
        //console.log(number, arr2[j])
        if (arr1[i] ** 2 == arr2[j]){
            isExist = true;
            break
        }
        // arr1[i] ** 2 does not exit on entire length of the array2
        if(j === len2-1){
            if(!isExist){
                return false;
            }
        }
    }
}
return true;
};
const array1 = [1, 2, 3, 4];
const array2 = [1, 9, 16, 12];
const result = checkSquareEleArr(array1, array2);
console.log(result);