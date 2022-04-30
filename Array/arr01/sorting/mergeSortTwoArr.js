// given two sorted array, need to merger these array in any other array  
// out put array should be sorted 
// apply merger sort technic

const mergeSortTwoArr = (arr1, arr2) =>{
    let newArr = [];
    let l1 = arr1.length; 
    let l2 = arr2.length;
    let i=0;
    let j=0;
    while(i<l1 && j < l2){
            if(arr1[i]<arr2[j]){
                newArr.push(arr1[i])
                i++;     
            }else{
                newArr.push(arr2[j])
                j++;
            }   
    }
    while(i<l1){
        newArr.push(arr1[i])
        i++;  
    }
    while(j<l2){
        newArr.push(arr2[j])
        j++;
    }
return newArr;
};
let arr1 = [1,4,6,7,9];
let arr2 = [2,5,8];
let result = mergeSortTwoArr(arr1, arr2);
console.log(result);
