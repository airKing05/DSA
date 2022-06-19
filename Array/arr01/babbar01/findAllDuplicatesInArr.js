// find total number of duplicate elements occurrence in array


// not able to du that
const findAllDuplicatesInArr = (arr) =>{
    let ans;
    let count= 0;
    let l = arr.length;
      // xor all element of the array
    for (let i =0; i<l; i++){
        let start = arr[i]
        for (let j = i+1; j< l; j++ ){
            if(start^arr[j] ==0){
                count++
                //ans.push(arr[j])
                console.log(start^arr[j])
            }
        }
    }
   
    return count
  };
  
  const array = [1,2,3,4,4]; // element could be random   // print 4:2
  const result = findAllDuplicatesInArr(array); // argument or params ke naam different hot hot behet hai
  console.log(result)