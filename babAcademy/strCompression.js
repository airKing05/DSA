//L#12
// strCompression
//"aabcccaaaddb" => "a2b1c3a3d2b1"

//1. need to count varibale to keep tracking of each character (count=1)
// 1b. also need to another count varibale to cases when each character sre unique
// 2. loop -  
// if arr[i] == arr[i+1] -> count++;
// increament i
// else output:  a[i] + count
// totalcount++
// set here count =1
// increment i

// if totalcount = str.length retunr str 


function strCompression(str){
    let len = str.length;
    let newStr = ""
    let count = 1;
    let totalCount =0;
    for(let i=0; i<len; i++){
      if(str[i] == str[i+1]){
        count++; 
       // console.log(count, str[i], totalCount)
      }else{
        newStr += str[i]+ count;
        //console.log(count, str[i], totalCount)
        totalCount++;
        count = 1;

      }
    }

    if(len === totalCount){
      return str;
    } 
    return newStr;
}

const string = "abcd33d";
const result = strCompression(string);
console.log(result);