// L#08
// M-2
// check Square Elements of one Array to anyother array
// array1=[1,2,3,4] array2=[16, 9, 4, 1] =>true
// time complexity is O(N)
// case-1 array1=[1,2,3,4] array2=[16, 9, 4, 1] 
// case-2 array1=[1,2,3,2] array2=[9, 4, 4, 1]

function checkSquareEleArr(arr1, arr2) {
    let len1 = arr1.length;
    let len2 = arr2.length;
    let map1 = {};
    let map2 = {};

    for(let num1 of arr1){
       map1[num1] = (map1[num1] || 0) + 1;
    }
    for (let num2 of arr2) {
        map2[num2] = (map2[num2] || 0) + 1;
    }

    for(let key in map1){
        if(!map2[key**2]){  // check key**2 of map1 is equal to key of map2
            return false;
        }
        if (map1[key] !== map2[key ** 2]) {  // value of map1 === map2
           return false;
        }

    }
   
console.log(map1, map2)
    
    return true;
};
const array1 = [1, 2, 2, 4];
const array2 = [1, 4, 16, 4];
const result = checkSquareEleArr(array1, array2);
console.log(result);