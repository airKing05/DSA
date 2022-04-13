

const intersectionOfTwoArray2 = (arr1, arr2) =>{
    let l1 = arr1.length;
    let l2 = arr2.length;
    let min = -123546;
    let intersect = [];
    let j=0;
    let i= 0;
  
        while(i<l1 && j<l2){
            if(arr1[i]<arr2[j]){   // optimization 
               i++                 // no need to go farther
             }
            else if(arr1[i]==arr2[j]){
                intersect.push(arr2[j])
                arr2[j] = min;
                console.log(arr2[j])
                 i++;
                 j++;
              
            }
            else{
                j++;
               
            }
        }
  
    return intersect;

};

const array1 = [1,2,2,3,3,3]; 
const array2 = [2,3,3,4];
const result = intersectionOfTwoArray2(array1, array2); 
console.log(result)