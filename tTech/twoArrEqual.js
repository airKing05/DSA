//L#12 
// GIVEN TWO ARRAY ARE EQAUL OR NOT



//m1 sort both the array an comapire
function twoArrEqual1(arr1, arr2){
    let len1 = arr1.length;
    let len2 = arr2.length;
     let isEqual = true;
    if(len1 !== len2){
         isEqual = false;
    }
    arr1.sort((a,b) => a-b);
    arr2.sort((a,b) => a-b);

    for(let i=0; i<len1; i++){
        if(arr1[i] !== arr2[i]){
            isEqual = false;
        }
    }
    return isEqual;
}
const array1 = [1, 2, 4, 5, 6, 6];
const array2 = [2, 4, 1, 6, 5, 7];
const result1 = twoArrEqual1(array1,array2);
console.log("result1", result1)


//m2 include arr1 element into arr2
// it will not work in this case
// now working for this case also
// const array1 = [1, 2, 4, 5, 6, 6];
// const array2 = [2, 4, 1, 6, 5, 7];


function twoArrEqual2(arr1, arr2){
    let len1 = arr1.length;
    let len2 = arr2.length;
    let isEqual = true;
    if (len1 !== len2) {
        isEqual = false;
    }
    arr1.forEach(element => {
        if (!arr2.includes(element)){
            isEqual = false;
           // console.log(element)
        }else{
            let index = arr2.indexOf(element);
            arr2.splice(index, 1);
            //console.log(element, index)
        }
    });

    if(arr2.length>0){
       isEqual = false;
    }
   
  return isEqual;
}

const result2 = twoArrEqual2(array1,array2);
console.log("result2", result2);



// m3 js methods every
const array3 = [1, 2, 4, 5, 6 ];
const array4 = [2, 4, 1, 6, 5];
// not work for this case
// const array3 = [1, 2, 4, 5, 6, 6];
// const array4 = [2, 4, 1, 6, 5, 7];

const isEqual = array3.length == array4.length && 
  array3.every(element => {
   
    if(array4.indexOf(element) > -1){
        
        return (element = array4[array4.indexOf(element)]);
    }
});

console.log("result3", isEqual);
