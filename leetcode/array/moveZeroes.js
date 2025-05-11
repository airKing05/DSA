// 

var moveZeroes = function(arr) {
    const len = arr.length;

    let count = 0;
    
    for(let i = 0; i<len; i++){
        if(arr[i] == 0){
            count++;
            arr[i] = arr[i+1]
        }
    }
   

    // [ 1, 1, 3, 3, 12 ]
    // now remove duplicate
    let start = 0;
    for(let i = 1; i<len; i++){
       if(arr[i] !== arr[start]){
          start++;
          arr[start] = arr[i];
       }
    }


    for(let i = len-1; i>count; i--){
        arr[i] = 0;
    }
    console.log(arr, count);
};


// const result = moveZeroes([0,1,0,3,12]);



var moveZeroes2 = function(arr) {
    const len = arr.length;

    let count = 0;
    
    let l = 0;
    const newArr = [];
    for(let i = 0; i<len; i++){
        if(arr[i] != 0){
          count++;
          newArr.push(arr[i])
        }
    }

    const zerosArr = [...new Array(count-1).fill(0)]
    const myArr = newArr.concat(zerosArr)

    console.log("arr2", arr, newArr, zerosArr, myArr)
   
};


const result2 = moveZeroes2([0,10,0,20,12]);


// two pointer
var moveZeroes3 = function(arr) {
    const len = arr.length;

    
    let l = 0;
    // const newArr = [];
    for(let i = 0; i<len; i++){
       if(arr[i] !== 0 ){
        [arr[l], arr[i]] = [arr[i], arr[l]];
        l++;
       }
      
    }

   
    console.log("arr2", arr,)
   
};


const result3 = moveZeroes3([0,10,0,20,12]);