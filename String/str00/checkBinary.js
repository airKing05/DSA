function checkBinary(str) {
     let splitStr = str.split('');
     let l = splitStr.length;
     let a;
     let arr = [];
     for (let i =0; i<l; i++){
        arr.push(splitStr[i])
       
        if(arr[i]>=2){
            a = false
          }else{
            a = true
          }
     } 
     console.log(arr)
     return a
}

const string = "12"
const result = checkBinary(string);
 console.log(result);
